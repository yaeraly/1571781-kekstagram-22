import { photos } from './data.js';

const pictureContainer  = document.querySelector('.pictures');

const pictureTemplate   = document.querySelector('#picture').content.querySelector('.picture');

const fragment          = document.createDocumentFragment();

photos.forEach(({ url, comments, likes }) => {
  const element = pictureTemplate.cloneNode(true);

  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__comments').textContent = comments.length;
  element.querySelector('.picture__likes').textContent = likes;

  fragment.appendChild(element);
});

pictureContainer.appendChild(fragment);
