//npm install selenium-webdriver
//npm install chromedriver
let fs = require("fs");
require("chromedriver");
let swd = require("selenium-webdriver");
//build browser
let bdr = new swd.Builder();
// build tab
let tab = bdr.forBrowser("chrome").build();
let url = "https://www.linkedin.com/";
//open given url in tab
let openresult = tab.get(url);
openresult.then(function () {
    console.log("Tab opened Succesfully");
});

openresult.catch(function (err) {
    console.log(err);
});