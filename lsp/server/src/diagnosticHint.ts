import { InferredInterface } from 'aiscript';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
	CodeAction,
	CodeActionKind,
	Command,
	Connection,
	Diagnostic,
	Position,
	Range,
	TextDocumentEdit,
	TextEdit
} from 'vscode-languageserver/node.js';

export interface Hint {
	createCommands(uri: string, range: Range): CodeAction[];
	executeCommand(connection: Connection, command: string, document: TextDocument, range: Range): void;
}

export class InferredInterfaceHint implements Hint {

	intf: InferredInterface;

	constructor(intf: InferredInterface) {
		this.intf = intf;
	}

	createCommands(uri: string, range: Range): CodeAction[] {
		const title = "Insert " + this.intf.name + " declaration";
		return [CodeAction.create(title, Command.create(title, "InsertInterface", uri, range), CodeActionKind.QuickFix)]; 
	
	}

	executeCommand(connection: Connection, command: string, document: TextDocument, range: Range): void {
		const text = "// Hello\n"; // this.intf.generateDeclarationComment();
		// we assume the assign factory statement 'Entity.create = function()...' has lhs and cuntion on the same line
		connection.workspace.applyEdit( {
			documentChanges: [
				TextDocumentEdit.create(
					 { uri: document.uri, version: document.version },
					 [ TextEdit.insert(Position.create(range.start.line, 0), text) ]
					 )
			]
		});

	}
} 

export interface DiagnosticHint<T extends Hint> {
	diagnostic: Diagnostic;
	hint: T;
}