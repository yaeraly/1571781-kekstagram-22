import { isEscEvent } from './util.js'

const page              = document.body;
const fullPhoto         = document.querySelector('.big-picture');
const closePhotoButton  = fullPhoto.querySelector('.big-picture__cancel');

const pageClassName     = 'modal-open';
const elementClassName  = 'hidden';

const showFullPhoto = ( pictureElement, { url, description, likes } ) => {
  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    toggleElement(page, pageClassName);
    toggleElement(fullPhoto, elementClassName);


    fullPhoto.querySelector('.social__comment-count').classList.add('hidden');
    fullPhoto.querySelector('.social__comments-loader').classList.add('hidden')
    fullPhoto.querySelector('.social__comments').classList.add('hidden');


    fullPhoto.querySelector('img').src = url;
    fullPhoto.querySelector('.likes-count').textContent = likes;
    fullPhoto.querySelector('.social__caption').textContent = description;
  });
}

// Toggle HTML Element Class Name
const toggleElement = (elementName, className) => {
  if (elementName.classList.contains(className)) {
    elementName.classList.remove(className);
  } else {
    elementName.classList.add(className);
  }
}

// Close Big Photo
closePhotoButton.addEventListener('click', () => {
  toggleElement(page, pageClassName);
  toggleElement(fullPhoto, elementClassName);
});

// Close Big Photo using Esc Key
document.addEventListener('keydown', (evt) => {
  if(isEscEvent(evt)) {
    toggleElement(page, pageClassName);
    toggleElement(fullPhoto, elementClassName);
  }
});

export { showFullPhoto }
