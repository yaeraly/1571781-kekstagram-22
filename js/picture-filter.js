import { debounce } from './util.js';
import { renderPictureList } from './picture-list.js';
import { makeUniqueRandomIntegerGenerator } from './util.js';

const DEBOUNCE_TIME = 500;

const pictureFilterBlock    = document.querySelector('.img-filters');
const defaultFilterButton   = pictureFilterBlock.querySelector('#filter-default');
const randomFilterButton    = pictureFilterBlock.querySelector('#filter-random');
const discussedFilterButton = pictureFilterBlock.querySelector('#filter-discussed');

const showFilterContainer = () => {
  pictureFilterBlock.classList.remove('img-filters--inactive');
}

const setActiveFilter = () => {
  let button = defaultFilterButton;

  return (filterButton) => {
    button.classList.remove('img-filters__button--active');
    button = filterButton;
    filterButton.classList.add('img-filters__button--active');
  }
}

const setActiveFilterButton = setActiveFilter();


const setPictureFilter = (pictures) => {
  const sortByDefault = () => {
    setActiveFilterButton(defaultFilterButton);
    renderPictureList(pictures);
  }

  const sortByRandom = () => {
    setActiveFilterButton(randomFilterButton);

    const getUniqueInteger = makeUniqueRandomIntegerGenerator(0, 24);
    const randomPhotos = new Array(10).fill(null).map(() => pictures[getUniqueInteger()]);
    renderPictureList(randomPhotos);
  }

  const sortByDiscussed = () => {
    setActiveFilterButton(discussedFilterButton);

    pictures.sort((a, b) => {
      return b.comments.length - a.comments.length;
    });

    renderPictureList(pictures);
  }

  const sortPictureByDefaultDebounce    = debounce(sortByDefault, DEBOUNCE_TIME);
  const sortPictureByRandomDebounce     = debounce(sortByRandom, DEBOUNCE_TIME);
  const sortPictureByDiscussedDebounce  = debounce(sortByDiscussed, DEBOUNCE_TIME);

  defaultFilterButton.addEventListener('click', sortPictureByDefaultDebounce);
  randomFilterButton.addEventListener('click', sortPictureByRandomDebounce);
  discussedFilterButton.addEventListener('click', sortPictureByDiscussedDebounce);
}


export { showFilterContainer, setPictureFilter }
