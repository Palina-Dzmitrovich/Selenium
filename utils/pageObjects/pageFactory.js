const basePage = require('../../utils/pageObjects/basePage/basePage.js');
const epamPage = require('../../utils/pageObjects/epam/epamPage.js');

class pageFactory {
    static getPage(pageName, browser) {
        switch(pageName) {
            case 'base':
                return new basePage(browser);
            case 'epam':
                return new epamPage(browser);
        }
    }
    
} 

module.exports = pageFactory;