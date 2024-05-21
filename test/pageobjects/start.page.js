import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get questionAmountInput () {
        return $('#question-amount-input');
    }

    get startBtn () {
        return $('#start-btn');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async start () {
        await browser.pause(1000);
        await this.startBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new StartPage();
