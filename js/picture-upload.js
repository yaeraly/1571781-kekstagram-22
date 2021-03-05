import { isEscEvent } from './util.js';
import { PAGE, PAGE_CLASS_NAME } from './source-data.js';

const inputUpload       = document.querySelector('.img-upload__input');
const pictureEditForm   = document.querySelector('.img-upload__overlay');
const closeFormButton   = pictureEditForm.querySelector('.img-upload__cancel');


const uploadPicture = () => {
  inputUpload.addEventListener('change', () => {
    PAGE.classList.toggle('modal-open');
    pictureEditForm.classList.toggle('hidden');

    pictureEditForm.querySelector('.scale__control--value').value = '100%'; // Значение по умолчанию — 100%
    pictureEditForm.querySelector('img').style = 'transform: scale(1)';
  });
}

const closeEditForm = () => {
  closeFormButton.addEventListener('click', () => {
    PAGE.classList.toggle('modal-open');
    pictureEditForm.classList.toggle('hidden');
    inputUpload.value = null;
  });

  document.addEventListener('keydown', (evt) => {
    if(isEscEvent(evt) && !pictureEditForm.classList.contains('hidden')) {
      PAGE.classList.toggle(PAGE_CLASS_NAME);
      pictureEditForm.classList.toggle('hidden');
      inputUpload.value = null;
    }
  });
}

export { uploadPicture, closeEditForm }
