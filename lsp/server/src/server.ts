/* --------------------------------------------------------------------------------------------
 * Fractions of this file are Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See https://github.com/microsoft/vscode-extension-samples/blob/main/LICENSE.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	CodeAction,
	CodeActionKind,
	Command,
	Range,
	Position
} from 'vscode-languageserver/node.js';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

// dynamic import required due to top-level await
const { Analyzer, ModuleBuilder, ProblemCollector } = await import('aiscript');
import { convertAnalysisToDiagnosticHints, convertProblemToDiagnostic } from './converter.js';
import { Hint } from './diagnosticHint.js';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

class Hints {
	hints = new Map<string, Hint>();
}

const ALL_HINTS = new Map<string, Hints>();


let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	console.log("LSP server initializing...");
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			codeActionProvider: true,
			textDocumentSync: TextDocumentSyncKind.Incremental,
			executeCommandProvider: {
				commands: [ "InsertInterface" ]					
			},
			/*
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true
			}
			*/
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	console.log("LSP server initialized!");
	return result;
});

connection.onCodeAction(params => {
	const hints = ALL_HINTS.get(params.textDocument.uri);
	if(!hints)
		return [];
	const hint = hints.hints.get(keyFromRange(params.range));
	if(!hint)
		return [];
	else
		return hint.createCommands(params.textDocument.uri, params.range);
});

connection.onExecuteCommand(async params => {
	const uri = params.arguments[0] as string;
	const hints = ALL_HINTS.get(uri);
	if(!hints)
		return [];
	const range = params.arguments[1] as Range;
	const hint = hints.hints.get(keyFromRange(range));
	if(!hint)
		return [];
	else {
		const document = documents.get(uri);
		hint.executeCommand(connection, params.command, document, range);
	}
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

function keyFromPosition(position: Position): string {
	return "/" + position.line + "/" + position.character
}

function keyFromRange(range: Range): string {
	return keyFromPosition(range.start) + keyFromPosition(range.end);
}

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	ALL_HINTS.delete(textDocument.uri);
	let diagnostics: Diagnostic[] = [];
	console.log("Creating ProblemCollector");
	const listener = new ProblemCollector();
	console.log("Parsing document");
	const module = ModuleBuilder.parse_module(textDocument.getText(),listener);
	console.log("Checking problems");
	if(listener.problems.length) {
		console.log("Found " +  listener.problems.length + " problem(s)");
		// don't analyze bogus code, simply report syntax errors
		diagnostics = listener.problems.map(problem => convertProblemToDiagnostic(problem)).filter(d => d!=null) as Diagnostic[]; // filtering until it's implemented
	} else {
		console.log("Analyzing code");
		const analyzer = new Analyzer(module, listener);
		analyzer.analyze();
		if(analyzer.interfaces.size > 0) {
			Array.from(analyzer.interfaces.values()).forEach( i => console.log("Inferred interface " + i.name));
		}
		const diagnosed = convertAnalysisToDiagnosticHints(analyzer); 
		if(diagnosed.length > 0) {
			const hints = new Hints();
			ALL_HINTS.set(textDocument.uri, hints);
			diagnosed.forEach(d => hints.hints.set(keyFromRange(d.diagnostic.range), d.hint));
			diagnostics = diagnosed.map(d => d.diagnostic);
		}
	}
	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
});

/*
// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		return [
			{
				label: 'TypeScript',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'JavaScript',
				kind: CompletionItemKind.Text,
				data: 2
			}
		];
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			item.detail = 'TypeScript details';
			item.documentation = 'TypeScript documentation';
		} else if (item.data === 2) {
			item.detail = 'JavaScript details';
			item.documentation = 'JavaScript documentation';
		}
		return item;
	}
);
*/

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
