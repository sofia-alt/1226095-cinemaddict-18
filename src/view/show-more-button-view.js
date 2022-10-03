import {createElement} from '../render.js';

export const createShowMoreButtonTemplate = () => '<button class="films-list__show-more">Show more</button>';

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