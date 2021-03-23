import { isEscEvent, toggleModal } from './util.js';

const fullPhoto         = document.querySelector('.big-picture');
const closePhotoButton  = fullPhoto.querySelector('.big-picture__cancel');
const commentsContainer = document.querySelector('.social__comments');
const socialComment     = commentsContainer.querySelector('.social__comment');
const fragment          = document.createDocumentFragment();


const renderComments = (arr) => {
  commentsContainer.textContent = '';

  arr.forEach(({ avatar, message, name }) => {
    const comment = socialComment.cloneNode(true);

    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    fragment.appendChild(comment);
  });
  commentsContainer.appendChild(fragment);
}

const showFullPhoto = ( pictureElement, { url, description, likes, comments } ) => {
  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    toggleModal(fullPhoto);

    const commentsLength = comments.length;

    const maxComments = Math.min(commentsLength, 5)

    fullPhoto.querySelector('img').src = url;
    fullPhoto.querySelector('img').alt = description;
    fullPhoto.querySelector('.likes-count').textContent = likes;
    fullPhoto.querySelector('.social__caption').textContent = description;
    fullPhoto.querySelector('.social__comment-count').innerHTML = `${maxComments} из <span class="comments-count">${commentsLength}</span> комментариев`;

    renderComments(comments.slice(0, maxComments));

    // fullPhoto.querySelector('.social__comment-count').classList.add('hidden');
    fullPhoto.querySelector('.social__comments-loader').classList.add('hidden');

    addEventListeners();
  });
}

const closeFullPhoto = () => {
  toggleModal(fullPhoto);
  deleteEventListeners();
}

const closeFullPhotoEsc = (evt) => {
  if(isEscEvent(evt) && !fullPhoto.classList.contains('hidden')) {
    toggleModal(fullPhoto);
    deleteEventListeners();
  }
}

const addEventListeners = () => {
  closePhotoButton.addEventListener('click', closeFullPhoto);
  document.addEventListener('keydown', closeFullPhotoEsc);
}

const deleteEventListeners = () => {
  closePhotoButton.removeEventListener('click', closeFullPhoto);
  document.removeEventListener('keydown', closeFullPhotoEsc);
}

export { showFullPhoto }
