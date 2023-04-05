import {
	Diagnostic,
	DiagnosticSeverity,
	Position,
	Range
} from 'vscode-languageserver/node.js';

// classic import is required for interface
import IProblem from 'aiscript/src/problem/IProblem';
import { InferredInterface, ProblemType } from 'aiscript';
import Analyzer from 'aiscript/src/analyzer/Analyzer';
import type Location from 'aiscript/src/builder/Location';
import Fragment from 'aiscript/src/builder/Fragment';
import { DiagnosticHint, Hint, InferredInterfaceHint } from './diagnosticHint.js';


function positionFromLocation(location: Location): Position {
	return Position.create(location.line - 1, location.column);
}

function rangeFromFragment(fragment: Fragment): Range {
	return {
		start: positionFromLocation(fragment.startLocation),
		end: positionFromLocation(fragment.endLocation)
	};
}

export function convertProblemToDiagnostic(problem: IProblem): Diagnostic | null{
	const diagnostic: Diagnostic = {
		severity: problem.type == ProblemType.ERROR ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
		range: rangeFromFragment(problem.fragment),
		message: problem.message,
		source: 'ex'
	};
	return diagnostic;
}

function convertInferredInterfaceToDiagnosticHint(intf: InferredInterface): DiagnosticHint<InferredInterfaceHint> {
	const diagnostic: Diagnostic = {
		severity: DiagnosticSeverity.Information, // use Information because Hint seems bogus in VSCode (only underlines a few characters)
		range: rangeFromFragment(intf.factory.fragment),
		message: "A declaration for " + intf.name + " has been detected. Do you want to insert it ?",
		source: 'ex'
	};
	return { diagnostic, hint: new InferredInterfaceHint(intf) };
}

export function convertAnalysisToDiagnosticHints(analyzer: Analyzer): DiagnosticHint<Hint>[] {
	const interfacesOfInterest: InferredInterface[] = Array.from(analyzer.interfaces.values())
		.filter(i => i instanceof InferredInterface)
		.map(i => i as InferredInterface)
		.filter(i => !i.isEmpty());	
	return interfacesOfInterest.map(i => convertInferredInterfaceToDiagnosticHint(i));
}