//references
require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var assert = require('chai').assert;

describe("Silo Suite", function(){

    //setup
    this.timeout(20000);
    var driver;

    before(function(){
        driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
        driver.manage().window().maximize();
    });

    //tear down

     after(function(){
        return driver.quit();
    });

    it ("Should open Silo FAQ page", async function (){
        driver.get("https://www.killik.com/silo/faqs/");
        
    });

    // Read the link for usb_handle_win.cc:1054 related errors - chrome future version will overcome this
    //https://stackoverflow.com/questions/65080685/usb-usb-device-handle-win-cc1020-failed-to-read-descriptor-from-node-
    
    // Product - JISA page
    it ("Should open JISA account type page", async function (){
        //var element = await driver.findElement(By.xpath("//a[@href='/silo/jisa/']"));
        await driver.findElement(By.xpath("//a[@href='/silo/jisa/']")).click;

        // Cookie Accept button
        //var elementCk = await driver.findElement(By.xpath("//a[normalize-space()='ACCEPT']"));
        // elementCk.click();
        await driver.findElement(By.xpath("//a[normalize-space()='ACCEPT']")).click;
       
        //element.click();
        
    });


    // Dashboard - Your Account

    // Deposits and Withdrawals

    // Product2 - ISA/GIA Account Type

    // Page - Fees

    // Product - Intelligent Silos

    // Product - Investing

    // Page How it works

/*
    // open intelligent silo page
    it ("Should open intelligent Silo page", function (){

        driver.get("https://www.killik.com/silo/faqs/intelligent-silos/");
    });

    // using chai promise
    it ("Page title is Intelligent Silos | Killik & Co", function (){
        return driver.getTitle().then(function (title){
            assert.equal(title,"Intelligent Silos | Killik & Co");
        });
    });

    // verify page title
    it ("Page title is Intelligent Silos | Killik & Co", async function (){
        var title = await driver.getTitle();
        return assert.equal(title,"Intelligent Silos | Killik & Co");
    });
*/
})
