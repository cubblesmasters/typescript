import "./element.sss";

declare let CubxComponent: any;

CubxComponent({
  is: '/* @echo elementName */',
  ids: {
    inputText: 'inputText',
    toUppercaseBtn: 'toUppercaseBtn',
    outputText: 'outputText'
  },
  ready(): void {
    this.initElementsReferences();
    if (this.getInputText()) {
      this.handleInputTextChange(this.getInputText());
    }
  },
  initElementsReferences(): void {
    this.toUppercaseBtn = document.getElementById(this.ids.toUppercaseBtn);
    this.inputText = <HTMLTextAreaElement> document.getElementById(this.ids.inputText);
    this.outputText = <HTMLInputElement> document.getElementById(this.ids.outputText);
    this.toUppercaseBtn.addEventListener('click', () => { this.updateOutputText(this.inputText.value) });
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
    let upperCaseText = inputText.toUpperCase();
    this.outputText.innerText = upperCaseText;
    this.setOutputText(upperCaseText); 
  }
});
