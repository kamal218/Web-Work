require("chromedriver");
let swd = require("selenium-webdriver");
let bldr = new swd.Builder();
let tab = bldr.forBrowser("chrome").build();
let url = "https://www.hackerrank.com/auth/login";
let openpage = tab.get(url);
// openpage.then(function () {
//     let usernamefind = tab.findElement(swd.By.css("#input-1"));
//     usernamefind.then(function (usernameelement) {
//         usernamefilled = usernameelement.sendKeys("jshgha");
//         usernamefilled.then(function () {
//             console.log("usser name is filled");
//         })
//     })
// })


openpage.then(function () {
    let wait = tab.manage().setTimeouts({ implicit: 10000 });
    return wait;
}).then(function () {
    let usernamefind = tab.findElement(swd.By.css("#input-1"));
    return usernamefind;
}).then(function (usernameelement) {
    usernamefilled = usernameelement.sendKeys("lafibex383@aprimail.com");
    return usernamefilled;
}).then(function () {
    let passfind = tab.findElement(swd.By.css("#input-2"));
    return passfind;
}).then(function (passelement) {
    let passfilled = passelement.sendKeys("abc@1234");
    return passfilled;
}).then(function () {
    console.log("Password is filled");
}).then(function () {
    let loginbtn = tab.findElement(swd.By.css(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"));
    return loginbtn;
}).then(function (loginbtn) {
    let click = loginbtn.click();
    return click;
}).then(function () {
    let ipbtn = tab.findElement(swd.By.css("#base-card-1-link"));
    return ipbtn;
}).then(function (ipbtn) {
    let ippage = ipbtn.click();
    return ippage;
}).then(function () {
    console.log("You have logged in successfully");
})