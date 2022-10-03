import FilmsView from '../view/films-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmsListView from '../view/films-list-view.js';
import CardsListTemplate from '../view/cards-list-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import {render} from '../render.js';

export default class FilmsCardsListPresenter {
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  cardsListComponent = new CardsListTemplate();

  init = (filmsContainer) => {
    this.filmsContainer = filmsContainer;

    render(this.filmsComponent, this.filmsContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.cardsListComponent, this.filmsListComponent.getElement())

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.cardsListComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.filmsListComponent.getElement());
  };
}