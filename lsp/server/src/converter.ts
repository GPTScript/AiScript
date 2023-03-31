import {
	Diagnostic,
	DiagnosticSeverity,
	Position
} from 'vscode-languageserver/node.js';

// classic import is required for interface
import IProblem from 'aiscript/src/problem/IProblem';
import { ProblemType } from 'aiscript';
import Analyzer from 'aiscript/src/analyzer/Analyzer';
import type Location from 'aiscript/src/builder/Location';

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


function positionFromLocation(location: Location): Position {
	return Position.create(location.line - 1, location.column);
}


export function convertProblemToDiagnostic(problem: IProblem): Diagnostic | null{
	const diagnostic: Diagnostic = {
		severity: problem.type == ProblemType.ERROR ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
		range: {
			start: positionFromLocation(problem.fragment.startLocation),
			end: positionFromLocation(problem.fragment.endLocation)
		},
		message: problem.message,
		source: 'ex'
	};
	return diagnostic;
}

export function convertAnalysisToDiagnostics(analyzer: Analyzer): Diagnostic[] {
	return [];
}