const {Builder, By, Key, until} = require('selenium-webdriver');

const basePage = require ('../basePage/basePage.js');
const elementOnThePage = require ('../elements/elementOnThePage.js');

class epamPage extends basePage {
    constructor(browser) {
        super(browser);
    }

    open() {
        return super.open('https://www.epam.com/');
    }

    get contactUs() {
        return new elementOnThePage(this.browser, 'a.cta-button-ui');
    }
    
    get firstName() {
        return new elementOnThePage(this.browser, '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name');
    }

    get lastName() {
        return new elementOnThePage(this.browser, '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name');
    }

    get email() {
        return new elementOnThePage(this.browser, '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email');
    }

    get phoneNumber() {
        return new elementOnThePage(this.browser, '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone');
    }

    get howDidYouFindOut() {
        return this.browser.findElement(By.xpath('//*[@id="_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor"]/div[2]/div/div/div/div/div[7]/div[1]/div/span[1]/span[1]/span/span[1]'));
    }

    get personalInfoCheckBox() {
        return new elementOnThePage(this.browser, '#new_form_gdprConsent'); 
    }

    
    get submitButton() {
        return new elementOnThePage(this.browser, '.end button.button-ui'); 
    }

    get heardFromList() {
        return new elementOnThePage(this.browser, '#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-results');
    }

}

module.exports = epamPage;