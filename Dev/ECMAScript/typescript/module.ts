//l'espace de nom contient des classes, fonctions

declare module arithmetics {
	add(left: number, right: number): number;
	subtract(left: number, right: number): number;
	multiply(left: number, right: number): number;
	divide(left: number, right: number): number;
}


// import et export
import { StringValidator } from "./StringValidator";

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
	isAcceptable(s: string) {
		return s.length === 5 && numberRegexp.test(s);
	}
}
