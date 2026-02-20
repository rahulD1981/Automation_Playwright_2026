class HomePage {

constructor(page) {
   this.page=page
   
    this.UserName =  page.getByPlaceholder("Username")
    this.Password = page.getByPlaceholder("Password")
     this.loginButton = page.locator(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button")

}

async OpenUrl() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

}

async loginToApplication(username,password){
   await this.UserName.fill(username)
   await this.Password.fill(password)
   await this.loginButton.click({force: true})
   await this.page.waitForLoadState("load")
   await this.page.getByText("Dashboard").first().waitFor({ timeout: 20000 })
   await this.page.locator("oxd-main-menu-item.active").click()
    await this.page.locator(".oxd-grid-4.orangehrm-full-width-grid input").first().fill("Admin");
}

async filterAndSelectCountry(filterBoxSelector, searchText, countryName) {
    // Type search text in filter box
    await this.page.locator(filterBoxSelector).type(searchText);
    
    // Wait for dropdown options to appear and use filter to find the matching country
    await this.page.locator(".ui-menu-item").filter({hasText: countryName}).first().click();
}

}module.exports={HomePage}