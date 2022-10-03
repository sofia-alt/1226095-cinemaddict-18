import {createElement} from '../render.js';

export const createFilmsTemplate = () => (`<section class="films">
</section>`);

export default class User {
  getTemplate() {
    return createFilmsTemplate();
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