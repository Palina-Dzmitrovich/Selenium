const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const browser = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const chai = require('chai');
const expect = chai.expect;

const pageFactory = require('../utils/pageObjects/pageFactory.js');


describe('`Contact Us` obligatory fields', function() {

        browser.manage().window().maximize();   
   
        it('should be hightlighted (active) if missed', async function() {
            
            let epamPage = pageFactory.getPage('epam', browser);

            await epamPage.open();

            await epamPage.makeAPause('5000');

            await epamPage.contactUs.click();

            await epamPage.makeAPause('3000');

            await epamPage.firstName.sendKeys('Иван');
            await epamPage.lastName.sendKeys('Иванов');
            await epamPage.email.sendKeys('supervanya@gmail.com');
            await epamPage.phoneNumber.sendKeys('+375296543211');

            await epamPage.makeAPause('3000');

            browser.executeScript("document.querySelector('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment').scrollIntoView(true);");

            await epamPage.makeAPause('3000');

            await epamPage.howDidYouFindOut.click();

            await epamPage.makeAPause('3000');

            await browser.actions()
            .sendKeys(Key.DOWN)
            .sendKeys(Key.DOWN)
            .sendKeys(Key.DOWN)
            .sendKeys(Key.DOWN)
            .sendKeys(Key.ENTER)
          .perform();

            await epamPage.submitButton.click();

            let activeInput = await browser.executeScript('return document.activeElement.id');

            expect(activeInput).to.equal(await epamPage.personalInfoCheckBox.element.getAttribute('id'));
            



            

        });
  });


