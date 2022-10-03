import { createElement } from '../render.js';

export const footerStatisticsTemplate = () => '<p>130 291 movies inside</p>';

export default class FooterStatistics {
  getTemplate() {
    return footerStatisticsTemplate;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}