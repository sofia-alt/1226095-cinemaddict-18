import {createElement} from '../render.js';

const createShowMoreButtonTemplate = () => '<button class="load-more" type="button">load more</button>';

export default class LoadMoreButton {
  getTemplate() {
    return createShowMoreButtonTemplate();
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
};