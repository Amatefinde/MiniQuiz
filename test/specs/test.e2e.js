import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'
import TestingPage from '../pageobjects/testing.page.js'
import ResultPage from '../pageobjects/results.page.js'



describe('start application', () => {
  it('should start testing', async () => {
    await StartPage.open()
    await StartPage.start()
    await expect(StartPage.startBtn).not.toBeExisting()
    await browser.pause(1000);

    for (let i = 0; i < 5; i++) {
      await browser.pause(500);
      await TestingPage.selectCheckboxes(Math.floor(Math.random() * 4))
      await TestingPage.submitQuestion()
      await browser.pause(500);
    }
    await browser.pause(1000);
    const results = await ResultPage.results;
    expect(results.length).toEqual(5)
    await ResultPage.goBack()
    await browser.pause(1000);
  })
})