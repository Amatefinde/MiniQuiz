import { $, $$ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    get results () {
        return $$('.exercise-label');
    }

    get backBtn () {
        return $('#go-back-btn');
    }

    async goBack () {
        await this.backBtn.click();
    }

    open () {
        return super.open('');
    }
}

export default new ResultPage();
