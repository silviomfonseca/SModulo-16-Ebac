class Home {
    get #enterFormPage(){ return $('~Forms')}

    async clickForms(){ this.#enterFormPage.click()}

}

module.exports = new Home