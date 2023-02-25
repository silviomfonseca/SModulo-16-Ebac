class Formulario {

  get #inputField() { return $('//android.widget.EditText[@content-desc="text-input"]') }
  get #textField() { return $('~input-text-result') }
  get #switch() { return $('~switch') }
  get #textSwith() { return $("~switch-text") }
  get #dropDown() { return $('~Dropdown') }
  get #btnActive() { return $('~button-Active') } 
  get #optionFromMenu(){ return $('android=new UiSelector().index(1)')}
   

  async typeInputField(input) { await this.#inputField.setValue(input) } // o setValue, envia uma sequencia de elementos do teclado, documentaçã API webdririo  
  async ticSwitch() { await this.#switch.click() }  
  async abreDrop() { await this.#dropDown.click() }
  async selectFromMenu(){ await this.#optionFromMenu.click()}
  async clickActive() { await this.#btnActive.click() }

  async getTextSw() {
   await this.#textSwith.waitForExist()
   return await this.#textSwith.getText()} 
 
  async getTextField() {
    await this.#textField.waitForExist()
       return await this.#textField.getText()}

}
module.exports = new Formulario