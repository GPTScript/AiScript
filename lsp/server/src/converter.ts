import {
	Diagnostic,
} from 'vscode-languageserver/node';

// classic import is required for interface
import IProblem from 'aiscript/src/problem/IProblem';
import Analyzer from 'aiscript/src/analyzer/Analyzer';

/*
	const diagnostic: Diagnostic = {
		severity: DiagnosticSeverity.Warning,
		range: {
			start: textDocument.positionAt(m.index),
			end: textDocument.positionAt(m.index + m[0].length)
		},
		message: `${m[0]} is all uppercase.`,
		source: 'ex'
	};
	if (hasDiagnosticRelatedInformationCapability) {
		diagnostic.relatedInformation = [
			{
				location: {
					uri: textDocument.uri,
					range: Object.assign({}, diagnostic.range)
				},
				message: 'Spelling matters'
			},
			{
				location: {
					uri: textDocument.uri,
					range: Object.assign({}, diagnostic.range)
				},
				message: 'Particularly for names'
			}
		];
	}
*/

export function convertProblemToDiagnostic(problem: IProblem): Diagnostic | null {
	return null;
}

export function convertAnalysisToDiagnostics(analyzer: Analyzer): Diagnostic[] {
	return [];
}