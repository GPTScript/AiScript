import {
	Diagnostic,
} from 'vscode-languageserver/node';

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

import IProblem from 'aiscript/dist/problem/IProblem';
import { Analyzer } from 'aiscript';

export function convertProblemToDiagnostic(problem: IProblem): Diagnostic | null {
	return null;
}

export function convertAnalysisToDiagnostics(analyzer: Analyzer): Diagnostic[] {
	return [];
}