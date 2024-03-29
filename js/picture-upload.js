import { isEscEvent, toggleModal } from './util.js';
import { setUserFormSubmit } from './picture-form.js';
import { incrementScaleValue, decrementScaleValue } from './picture-scale.js';


const inputUpload         = document.querySelector('.img-upload__input');
const pictureSubmitForm   = document.querySelector('.img-upload__form');
const pictureEditForm     = document.querySelector('.img-upload__overlay');
const previewPicture      = pictureEditForm.querySelector('img');
const closeEditFormButton = pictureEditForm.querySelector('.img-upload__cancel');
const imgPicturePreview   = document.querySelector('.img-upload__preview');


const scaleControlValue         = pictureEditForm.querySelector('.scale__control--value');
const incrementScaleValueButton = pictureEditForm.querySelector('.scale__control--bigger');
const decrementScaleValueButton = pictureEditForm.querySelector('.scale__control--smaller');


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
