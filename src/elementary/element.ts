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
    this.toUppercaseBtn = document.getElementById(this.ids.toUppercaseBtn);
    this.inputText = <HTMLTextAreaElement> document.getElementById(this.ids.inputText);
    this.outputText = <HTMLInputElement> document.getElementById(this.ids.outputText);
    this.toUppercaseBtn.addEventListener('click', () => { this.updateOutputText() });
    if (this.getInputText()) {
      this.inputText.value = this.getInputText(); 
      this.updateOutputText();
    }
  },
  /**
   *  Observe the Cubbles-Component-Model: If value for slot 'inputText' has changed ...
   */
  modelInputTextChanged(newValue: string): void {
    this.inputText.value = newValue;
    this.updateOutputText();
  },

  updateOutputText(): void {
    let inputText:string = this.inputText.value;
    let upperCaseText = inputText.toUpperCase();
    this.outputText.innerText = upperCaseText;
    this.setOutputText(upperCaseText); 
  }
});
