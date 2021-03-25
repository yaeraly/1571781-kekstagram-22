import { isEscEvent, toggleModal } from './util.js';
import { validateComment } from './comment-validation.js';
import { validateHashtags } from './hashtag-validation.js';
import { setUserFormSubmit } from './picture-form.js';
import { incrementScaleValue, decrementScaleValue } from './picture-scale.js';


const inputUpload         = document.querySelector('.img-upload__input');
const pictureSubmitForm   = document.querySelector('.img-upload__form');
const hashtagInput        = pictureSubmitForm.querySelector('.text__hashtags');
const commentInput        = pictureSubmitForm.querySelector('.text__description');
const pictureEditForm     = document.querySelector('.img-upload__overlay');
const previewPicture      = pictureEditForm.querySelector('img');
const closeEditFormButton = pictureEditForm.querySelector('.img-upload__cancel');
const imgPicturePreview   = document.querySelector('.img-upload__preview');


const scaleControlValue         = pictureEditForm.querySelector('.scale__control--value');
const incrementScaleValueButton = pictureEditForm.querySelector('.scale__control--bigger');
const decrementScaleValueButton = pictureEditForm.querySelector('.scale__control--smaller');

const validateCommentDebounce = validateComment(commentInput);
const validateHashtagsDebounce = validateHashtags(hashtagInput);

const resetUploadForm = () => {
  pictureSubmitForm.reset();

  imgPicturePreview.style = null;     // Не получается сбосить эффекты после отправки на сервер, пришлось так сделать
  imgPicturePreview.className = null; // Не получается сбосить эффекты после отправки на сервер, пришлось так сделать
}

const uploadPicture = () => {
  inputUpload.addEventListener('change', () => {
    toggleModal(pictureEditForm);
    scaleControlValue.value = '100%';
    previewPicture.style = 'transform: scale(1)';
    addEventListeners();
  });
}

const closeEditPictureForm = () => {
  toggleModal(pictureEditForm);
  resetUploadForm();
  deleteEventListeners();
}

const closeEditPictureFormByEscape = (evt) => {
  if (isEscEvent(evt) && !pictureEditForm.classList.contains('hidden')) {
    toggleModal(pictureEditForm);
    resetUploadForm();
    deleteEventListeners();
  }
}

const blockEscape = () => {
  document.removeEventListener('keydown', closeEditPictureFormByEscape);
}

const returnBackEscape = () => {
  document.addEventListener('keydown', closeEditPictureFormByEscape);
}

const addEventListeners = () => {
  hashtagInput.addEventListener('focus', blockEscape);
  hashtagInput.addEventListener('blur', returnBackEscape);
  hashtagInput.addEventListener('input', validateHashtagsDebounce);

  commentInput.addEventListener('focus', blockEscape);
  commentInput.addEventListener('blur', returnBackEscape);
  commentInput.addEventListener('input', validateCommentDebounce);

  pictureSubmitForm.addEventListener('submit', setUserFormSubmit);
  document.addEventListener('keydown', closeEditPictureFormByEscape);
  closeEditFormButton.addEventListener('click', closeEditPictureForm);
  incrementScaleValueButton.addEventListener('click', incrementScaleValue);
  decrementScaleValueButton.addEventListener('click', decrementScaleValue);
}

const deleteEventListeners = () => {
  hashtagInput.removeEventListener('focus', blockEscape);
  hashtagInput.removeEventListener('blur', returnBackEscape);
  hashtagInput.removeEventListener('input', validateHashtagsDebounce);

  commentInput.removeEventListener('focus', blockEscape);
  commentInput.removeEventListener('blur', returnBackEscape);
  commentInput.removeEventListener('input', validateCommentDebounce);

  pictureSubmitForm.removeEventListener('submit', setUserFormSubmit);
  document.removeEventListener('keydown', closeEditPictureFormByEscape);
  closeEditFormButton.removeEventListener('click', closeEditPictureForm);
  incrementScaleValueButton.removeEventListener('click', incrementScaleValue);
  decrementScaleValueButton.removeEventListener('click', decrementScaleValue);
}

export { uploadPicture, resetUploadForm }
