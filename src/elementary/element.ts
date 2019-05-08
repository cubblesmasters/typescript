import "./element.sss";
import { CubxComponentPrototype } from "./cubx-component-defs";
import { toUpperCase } from "./toUpperCase";

// Declare the CubxComponent to make it available
declare function CubxComponent(prototype: CubxComponentPrototype): void;

// Define the component respecting the CubxComponentPrototype interface
CubxComponent({
  is: "/* @echo elementName */",
  ids: {
    inputText: "inputText",
    toUppercaseBtn: "toUppercaseBtn",
    outputText: "outputText"
  },
  toUppercaseBtn: HTMLInputElement,
  inputText: HTMLTextAreaElement,
  outputText: HTMLInputElement,
  ready(): void {
    this.initElementsReferences();
    if (this.getInputText()) {
      this.handleInputTextChange(this.getInputText());
    }
  },
  initElementsReferences(): void {
    this.toUppercaseBtn = <HTMLInputElement>(
      document.getElementById(this.ids.toUppercaseBtn)
    );
    this.inputText = <HTMLTextAreaElement>(
      document.getElementById(this.ids.inputText)
    );
    this.outputText = <HTMLInputElement>(
      document.getElementById(this.ids.outputText)
    );
    this.toUppercaseBtn.addEventListener("click", () => {
      this.updateOutputText(this.inputText.value);
    });
  },
  /**
   *  Observe the Cubbles-Component-Model: If value for slot 'inputText' has changed ...
   */
  modelInputTextChanged(newValue: string): void {
    this.handleInputTextChange(newValue);
  },
  handleInputTextChange(inputText: string): void {
    this.inputText.value = inputText;
    this.updateOutputText(inputText);
  },
  updateOutputText(inputText: string): void {
    let upperCaseText = toUpperCase(inputText);
    this.outputText.innerText = upperCaseText;
    this.setOutputText(upperCaseText);
  }
} as CubxComponentPrototype);
