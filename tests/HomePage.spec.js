// @ts-check
import { test, expect } from '@playwright/test';
const {HomePage} = require('../pages/HomePage')
//https://testautomationpractice.blogspot.com/p/playwrightpractice.html

test('Login to app', async ({ page }) => {
const homePage = new HomePage(page);
await homePage.OpenUrl();
await homePage.loginToApplication('Admin', 'admin123')
 
});

test('Validate Title', async ({ page }) => {
const homePage = new HomePage(page);
await homePage.OpenUrl();
await homePage.loginToApplication('Admin', 'admin123')
await expect(page).toHaveTitle("OrangeHRM")
await expect(page.locator("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toHaveText("Dashboard")
//await expect(page.locator("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toHaveValue("Dashboard")
const enterdText = await page.locator("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").textContent()
console.log("Entered text is--" + enterdText)
 
});

test('Drop down selection', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.waitForLoadState("load");
await page.locator("#dropdown-class-example").selectOption("option2");
page.on("dialog",(dialog) =>{

    dialog.accept();
})
 await page.locator("fieldset>[value='Alert']").click();
 
});

test('Dialog one liner', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.waitForLoadState("load");

//page.on("dialog",dialog => dialog.accept() )
page.on("dialog",dialog => dialog.dismiss() )

 await page.locator("fieldset>[value='Alert']").click();
 
});

test('uncheck chk box valiation', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.waitForLoadState("load");
page.locator("#checkBoxOption1").check();
expect(page.locator("#checkBoxOption1")).toBeChecked();
page.locator("#checkBoxOption1").uncheck(); 
expect(page.locator("#checkBoxOption1")).not.toBeChecked();
await page.screenshot({path:'screenshot.png',fullPage:true})
await expect(page.locator("#checkBoxOption1")).toHaveAttribute("type","checkbox");
await page.getByLabel("Option1").check();
await page.screenshot({path:'screenshot.png',fullPage:true})


 
});

test('GetByLabelName', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForLoadState("load");
await page.waitForTimeout(2000);
await page.getByLabel("Male").first().check();
await page.screenshot({path:'screenshot.png',fullPage:true})

 
});

test('Complex with Filter', async ({ page }) => {
await page.goto("https://webdriveruniversity.com/Page-Object-Model/products.html");
await page.waitForLoadState("load");
//await page.locator(".col-sm-4.col-lg-4.col-md-4 div").filter({hasText:"Game Consoles"}).click();
//await page.locator(".col-sm-4.col-lg-4.col-md-4 div div").filter({hasText:"Game Consoles"}).click();

await page.locator(".col-sm-4.col-lg-4.col-md-4 div div p").filter({hasText:"Game Consoles"}).click();


await page.screenshot({path:'screenshot.png',fullPage:true})

//await page.locator("body h1").filter({hasText: 'nokia edge'}).getByRole('button').click()


 
});

test('Complex with Filter 11', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
await page.waitForLoadState("load");
//await page.locator(".product").filter({hasText:"Cucumber - 1 Kg"}).getByRole('button').click(); 
//await page.locator(".products div").filter({hasText:"Beetroot - 1 Kg"}).getByRole('button').click(); 


await page.locator(".products>div").filter({hasText:"Cucumber - 1 Kg"}).getByRole('button').click(); 
await page.screenshot({path:'screenshot.png',fullPage:true})



//await page.locator("body h1").filter({hasText: 'nokia edge'}).getByRole('button').click()
//.products div p
 
});


test('Find Price', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
await page.waitForLoadState("load");


//await expect(page.locator("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toHaveText("Dashboard")

//const productNames = await page.locator(".products div").filter({hasText:"Cucumber - 1 Kg"}).allTextContents();
//console.log("Product Names: ", productNames);

    const price = await page.locator(".products div").filter({hasText:"Cucumber - 1 Kg"}).locator("p").textContent();
    console.log("Price of Cucumber - 1 Kg is: ", price);
    await page.locator(".products div").filter({hasText:"Cucumber - 1 Kg"}).getByRole('button').click();
    await page.locator(".products div").filter({hasText:"Cucumber - 1 Kg"}).getByRole('button',{name:'Add'}).click();
    //clickin on 2nd button if avaliable -- await page.locator(".products div").filter({hasText:"Cucumber - 1 Kg"}).getByRole('button').nth(1).click();

})



test('Find Country', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.waitForLoadState("load");
const homePage = new HomePage(page);
// Filter for India by typing "IN" in the autocomplete box
await homePage.filterAndSelectCountry("#autocomplete", "IN", "India");
await page.screenshot({path:'screenshot.png',fullPage:true})

})

test('list box with filter ', async ({ page }) => {
await page.goto('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html');
await page.waitForLoadState("load");
await page.getByPlaceholder("Food Item").type("a");
await page.waitForTimeout(2000);
await page.locator("#myInputautocomplete-list div").filter({hasText: "Avacado"}).first().click();
await page.screenshot({path:'screenshot.png',fullPage:true})

})

test('list box with filter', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
await page.waitForLoadState("load");
await page.locator("#autocomplete").type("ind");
await page.waitForTimeout(2000);
await page.locator('#ui-id-1 li').filter({hasText: "India"}).nth(1).click();
await page.screenshot({path:'screenshot.png',fullPage:true})

})

test('drop down select from list', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
await page.waitForLoadState("load");
//

})

test('Boot Strap Drop Down', async ({ page }) => {
await page.goto('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')
await page.waitForLoadState("load");
await page.locator("#menu1").click();
await page.locator(".dropdown-menu li a").filter({hasText:"JavaScript"}).click();
await page.screenshot({path:'screenshot.png',fullPage:true})

})

test('Boot Strap Drop Down with for loop', async ({ page }) => {
await page.goto('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')
await page.waitForLoadState("load");
await page.locator("#menu1").click();
const ddCount = await page.locator(".dropdown-menu li a").count();
console.log("Drop down count is: " + ddCount);
for(let i=0; i<ddCount; i++){
    const text = await page.locator(".dropdown-menu li a").nth(i).textContent();
    if(text === "JavaScript"){
        await page.locator(".dropdown-menu li a").nth(i).click();
        break;
    }  
} 
await page.screenshot({path:'screenshot.png',fullPage:true})

})

test('Mouse Hover', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
await page.waitForLoadState("load");
await page.locator(".dropbtn").hover();
await page.waitForTimeout(2000);
await page.getByText("Mobiles").first().click();





})


//
 


