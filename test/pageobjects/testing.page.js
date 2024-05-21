import { $, $$ } from "@wdio/globals";
import Page from "./page.js";


class TestingPage extends Page {
  /**
   * define selectors using getter methods
   */
  get checkboxes() {
    return $$("input[type=\"checkbox\"]");
  }

  get nextBtn() {
    return $("#submit-btn");
  }


  async selectCheckboxes(index) {
    const checkboxes = await this.checkboxes;
    await checkboxes[index].click();
  }

  async submitQuestion() {
    await this.nextBtn.click();
  }

  async deselectCheckboxes(index) {
    const checkboxes = await this.checkboxes;
    const checkbox = checkboxes[index];
    const isSelected = await checkbox.isSelected();
    if (isSelected) {
      await checkbox.click();
    }

  }

}

export default new TestingPage();
