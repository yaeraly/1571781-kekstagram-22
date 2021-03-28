import { isEscEvent, toggleModal } from './util.js';

const fullPhoto           = document.querySelector('.big-picture');
const closePhotoButton    = fullPhoto.querySelector('.big-picture__cancel');
const commentLoaderButton = fullPhoto.querySelector('.social__comments-loader');
const commentsContainer   = document.querySelector('.social__comments');
const socialComment       = commentsContainer.querySelector('.social__comment');
const fragment            = document.createDocumentFragment();


const renderComments = (arr) => {
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
    commentsContainer.textContent = null;

    const commentsLength = comments.length;

    let commentStart = 0;
    let commentEnd = Math.min(commentsLength, 5);

    toggleModal(fullPhoto);

    if (commentsLength <= 5) {
      fullPhoto.querySelector('.social__comments-loader').classList.add('hidden');
    } else {
      fullPhoto.querySelector('.social__comments-loader').classList.remove('hidden');

      const loadMoreComments = () => {
        commentStart += 5;
        if(commentEnd + 5 < commentsLength) {
          commentEnd += 5;
        } else {
          commentEnd = commentsLength;
          commentLoaderButton.removeEventListener('click', loadMoreComments);
          fullPhoto.querySelector('.social__comments-loader').classList.add('hidden');
        }
        renderComments(comments.slice(commentStart, commentEnd));
        fullPhoto.querySelector('.social__comment-count').innerHTML = `${commentEnd} из <span class="comments-count">${commentsLength}</span> комментариев`;
      }

      commentLoaderButton.addEventListener('click', loadMoreComments);
    }

    fullPhoto.querySelector('img').src = url;
    fullPhoto.querySelector('img').alt = description;
    fullPhoto.querySelector('.likes-count').textContent = likes;
    fullPhoto.querySelector('.social__caption').textContent = description;
    fullPhoto.querySelector('.social__comment-count').innerHTML = `${commentEnd} из <span class="comments-count">${commentsLength}</span> комментариев`;

    renderComments(comments.slice(commentStart, commentEnd));
    addEventListeners();
  });
}

const closeFullPhoto = () => {
  toggleModal(fullPhoto);
  deleteEventListeners();
}

const closeFullPhotoByEscape = (evt) => {
  if(isEscEvent(evt) && !fullPhoto.classList.contains('hidden')) {
    toggleModal(fullPhoto);
    deleteEventListeners();
  }
}

const addEventListeners = () => {
  closePhotoButton.addEventListener('click', closeFullPhoto);
  document.addEventListener('keydown', closeFullPhotoByEscape);
}

const deleteEventListeners = () => {
  closePhotoButton.removeEventListener('click', closeFullPhoto);
  document.removeEventListener('keydown', closeFullPhotoByEscape);
}

export { showFullPhoto }
