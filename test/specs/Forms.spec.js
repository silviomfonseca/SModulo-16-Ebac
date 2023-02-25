const dropActiveScreen = require("../screens/dropActive.screen");
const formularioScreen = require("../screens/formulario.screen");
const homeScreen = require("../screens/home.screen");


describe('Acessar Formulario', () => {
  it('Clicar em formulario', async () => {
    await homeScreen.clickForms()
    await formularioScreen.typeInputField('Teste');
    expect(await formularioScreen.getTextField()).toEqual('Teste')
    await formularioScreen.ticSwitch();
    expect(await formularioScreen.getTextSw()).toEqual('Click to turn the switch OFF')
    await formularioScreen.abreDrop();
    await formularioScreen.selectFromMenu();
    await formularioScreen.clickActive();
    expect (await dropActiveScreen.selecionaText()).toContain('This button is active')
    await dropActiveScreen.clickDrop()


  });

})
