class dropActive {   
   get #dropActText() { return $('android=new UiSelector().text("This button is active")') }
   get #activeDrop() { return $('android=new UiSelector().index(2)') }
  
   async clickDrop() {     
       await this.#activeDrop.waitForExist()  
       return await this.#activeDrop.click()      
   }
   async selecionaText() {
      await this.#dropActText.waitForExist()
     return await this.#dropActText.getText()
   }

}

module.exports = new dropActive