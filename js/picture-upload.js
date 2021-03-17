import { isEscEvent } from './util.js';
import { PAGE, PAGE_CLASS_NAME } from './source-data.js';
import { incrementScaleValue, decrementScaleValue } from './picture-scale.js';


const inputUpload           = document.querySelector('.img-upload__input');
const pictureEditForm       = document.querySelector('.img-upload__overlay');
const previewPicture        = pictureEditForm.querySelector('img');
const closeEditFormButton   = pictureEditForm.querySelector('.img-upload__cancel');

const scaleControlValue         = pictureEditForm.querySelector('.scale__control--value');
const incrementScaleValueButton = pictureEditForm.querySelector('.scale__control--bigger');
const decrementScaleValueButton = pictureEditForm.querySelector('.scale__control--smaller');


const uploadPicture = () => {
  inputUpload.addEventListener('change', () => {
    PAGE.classList.toggle(PAGE_CLASS_NAME);
    pictureEditForm.classList.toggle('hidden');

    previewPicture.style = 'transform: scale(1)';
    scaleControlValue.value = '100%'; // Значение по умолчанию — 100%

    addEventListeners();
  });
}

const closeEditPictureForm = () => {
  PAGE.classList.toggle(PAGE_CLASS_NAME);
  pictureEditForm.classList.toggle('hidden');
  inputUpload.value = null;

  deleteEventListeners();
}

const closeEditPictureFormEsc = (evt) => {
  if (isEscEvent(evt) && !pictureEditForm.classList.contains('hidden')) {
    PAGE.classList.toggle(PAGE_CLASS_NAME);
    pictureEditForm.classList.toggle('hidden');
    inputUpload.value = null;

    deleteEventListeners();
  }
}

const addEventListeners = () => {
  document.addEventListener('keydown', closeEditPictureFormEsc);
  closeEditFormButton.addEventListener('click', closeEditPictureForm);
  incrementScaleValueButton.addEventListener('click', incrementScaleValue);
  decrementScaleValueButton.addEventListener('click', decrementScaleValue);
}

const deleteEventListeners = () => {
  document.removeEventListener('keydown', closeEditPictureFormEsc);
  closeEditFormButton.removeEventListener('click', closeEditPictureForm);
  incrementScaleValueButton.removeEventListener('click', incrementScaleValue);
  decrementScaleValueButton.removeEventListener('click', decrementScaleValue);
}


export { uploadPicture }
