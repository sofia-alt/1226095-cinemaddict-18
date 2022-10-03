import {createElement} from '../render';

export const createCardsListTemplate = () => '<div class="films-list__container"></div>';

export default class CardsListView {
  getTemplate() {
    return createCardsListTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}