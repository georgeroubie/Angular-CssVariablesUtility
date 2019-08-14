// Angular Modules
import { Injectable } from '@angular/core';

@Injectable()
export class CssVariablesService {

	public getValue(propertyName: string): string | null {
		try {
			const root: HTMLElement = document.documentElement;
			const value: string = getComputedStyle(root).getPropertyValue(propertyName);
			return value ? value.trim() : null;
		} catch(ex) { return null; }
	}

	public setValue(propertyName: string, newValue: string): void {
		try {
			const root: HTMLElement = document.documentElement;
			root.style.setProperty(propertyName, newValue);
		} catch (ex) { }
	}
}
