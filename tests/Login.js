const config = require ("../config/config.json");
//Xray 
//Login.js
class LoginPage {
 
    constructor(page) {
      this.page = page;
    }
 
    async navigate() {
      await this.page.goto(config.endpoint);
    }
     
    async login(username, password) {
        await this.page.fill(config.username_field, username);
        await this.page.fill(config.password_field, password);
        await this.page.click(config.login_button);
    }
 
    async getInnerText(){
        return this.page.innerText("p");
    }
 
  }
  module.exports = { LoginPage };