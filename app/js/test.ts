/// <reference path="References.ts" />

module Test {
	export class TestClass implements TestInterface {
		ImplementThis(b: boolean) {
			return !b;
		}
	}
}