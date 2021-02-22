import { photos } from './data.js';

const pictureContainer  = document.querySelector('.pictures');

const pictureTemplate   = document.querySelector('#picture').content.querySelector('.picture');

const fragment          = document.createDocumentFragment();

photos.forEach(({ url, comments, likes }) => {
  const element = pictureTemplate.cloneNode(true);

  element.children[0].src = url;
  element.children[1].children[0].textContent = comments.length;
  element.children[1].children[1].textContent = likes;

  fragment.appendChild(element);
});

pictureContainer.appendChild(fragment);
