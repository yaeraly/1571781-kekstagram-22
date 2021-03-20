import { isEscEvent, toggleModal } from './util.js';
import { setUserFormSubmit } from './picture-form.js';
import { incrementScaleValue, decrementScaleValue } from './picture-scale.js';


const inputUpload         = document.querySelector('.img-upload__input');
const pictureSubmitForm   = document.querySelector('.img-upload__form');
const pictureEditForm     = document.querySelector('.img-upload__overlay');
const previewPicture      = pictureEditForm.querySelector('img');
const closeEditFormButton = pictureEditForm.querySelector('.img-upload__cancel');
const hashtag             = pictureEditForm.querySelector('.text__hashtags');
const comment             = pictureEditForm.querySelector('.text__description');

const scaleControlValue         = pictureEditForm.querySelector('.scale__control--value');
const incrementScaleValueButton = pictureEditForm.querySelector('.scale__control--bigger');
const decrementScaleValueButton = pictureEditForm.querySelector('.scale__control--smaller');


const resetUploadForm = () => {
  hashtag.value = null;
  comment.value = null;
  inputUpload.value = null;
  scaleControlValue.value = '100%';
  previewPicture.style = 'transform: scale(1)';
}

const uploadPicture = () => {
  inputUpload.addEventListener('change', () => {
    toggleModal(pictureEditForm);
    resetUploadForm();
    addEventListeners();
  });
}

const closeEditPictureForm = () => {
  toggleModal(pictureEditForm);
  resetUploadForm();
  deleteEventListeners();
}

const closeEditPictureFormEsc = (evt) => {
  if (isEscEvent(evt) && !pictureEditForm.classList.contains('hidden')) {
    toggleModal(pictureEditForm);
    resetUploadForm();
    deleteEventListeners();
  }
}

const addEventListeners = () => {
  document.addEventListener('keydown', closeEditPictureFormEsc);
  pictureSubmitForm.addEventListener('submit', setUserFormSubmit);
  closeEditFormButton.addEventListener('click', closeEditPictureForm);
  incrementScaleValueButton.addEventListener('click', incrementScaleValue);
  decrementScaleValueButton.addEventListener('click', decrementScaleValue);
}

const deleteEventListeners = () => {
  document.removeEventListener('keydown', closeEditPictureFormEsc);
  pictureSubmitForm.removeEventListener('submit', setUserFormSubmit);
  closeEditFormButton.removeEventListener('click', closeEditPictureForm);
  incrementScaleValueButton.removeEventListener('click', incrementScaleValue);
  decrementScaleValueButton.removeEventListener('click', decrementScaleValue);
}


export { uploadPicture, resetUploadForm }
