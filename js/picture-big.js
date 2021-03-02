import { isEscEvent } from './util.js'

const page              = document.body;
const fullPhoto         = document.querySelector('.big-picture');
const closePhotoButton  = fullPhoto.querySelector('.big-picture__cancel');
const commentsContainer = document.querySelector('.social__comments');
const socialComment     = commentsContainer.querySelector('.social__comment');

const pageClassName     = 'modal-open';
const elementClassName  = 'hidden';


const renderComments = (arr) => {
  commentsContainer.textContent = '';

  arr.forEach(({ avatar, message, name }) => {
    const comment = socialComment.cloneNode(true);

    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    commentsContainer.appendChild(comment);
  });
}

const showFullPhoto = ( pictureElement, { url, description, likes, comments } ) => {
  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    toggleElement(page, pageClassName);
    toggleElement(fullPhoto, elementClassName);

    const COMMENT_LENGTH = comments.length;

    const COMMENTS_TO_SHOW = COMMENT_LENGTH < 5 ? COMMENT_LENGTH : 5;

    fullPhoto.querySelector('img').src = url;
    fullPhoto.querySelector('img').alt = description;
    fullPhoto.querySelector('.likes-count').textContent = likes;
    fullPhoto.querySelector('.social__caption').textContent = description;
    fullPhoto.querySelector('.social__comment-count').innerHTML = `${COMMENTS_TO_SHOW} из <span class="comments-count">${COMMENT_LENGTH}</span> комментариев`;

    renderComments(comments.slice(0, COMMENTS_TO_SHOW));

    // fullPhoto.querySelector('.social__comment-count').classList.add('hidden');
    fullPhoto.querySelector('.social__comments-loader').classList.add('hidden');
  });
}

// Toggle HTML Element Class Name
const toggleElement = (elementName, className) => {
  elementName.classList.toggle(className);
}

// Close Big Photo
closePhotoButton.addEventListener('click', () => {
  toggleElement(page, pageClassName);
  toggleElement(fullPhoto, elementClassName);
});

// Close Big Photo using Esc Key
document.addEventListener('keydown', (evt) => {
  if(isEscEvent(evt) && !fullPhoto.classList.contains(elementClassName)) {
    toggleElement(page, pageClassName);
    toggleElement(fullPhoto, elementClassName);
  }
});

export { showFullPhoto }
