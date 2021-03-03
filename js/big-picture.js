import { togglePage, toggleElement } from './util.js';
import { onPopupClick, onPopupEscKeydown } from './popup-handler.js';

const fullPhoto         = document.querySelector('.big-picture');
const closePhotoButton  = fullPhoto.querySelector('.big-picture__cancel');
const commentsContainer = document.querySelector('.social__comments');
const socialComment     = commentsContainer.querySelector('.social__comment');


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

    togglePage();
    toggleElement(fullPhoto);

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
  });
}

onPopupClick(closePhotoButton, fullPhoto);
onPopupEscKeydown(fullPhoto);


export { showFullPhoto }
