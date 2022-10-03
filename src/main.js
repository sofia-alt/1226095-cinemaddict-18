import {
  render
} from './render.js';
import Sort from './view/sort-view.js';
import User from './view/user-view.js';
import MainNavigation from './view/main-navigation-view';
import FooterStatistics from './view/footer-statistics-view.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');

render(new User(), siteHeaderElement);
render(new MainNavigation(), siteMainElement);
render(new Sort(), siteMainElement);
render(new FooterStatistics(), siteFooterElement);