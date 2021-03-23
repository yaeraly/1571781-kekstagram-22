import { sendData } from './fetch-api.js';
import { resetUploadForm } from './picture-upload.js';
import { isEscEvent, toggleModal } from './util.js';

const main                  = document.querySelector('main');
const successPopupTemplate  = document.querySelector('#success').content.querySelector('.success');
const failPopupTemplate     = document.querySelector('#error').content.querySelector('.error');
const pictureEditForm       = document.querySelector('.img-upload__overlay');


let successPopup;
let failPopup;
let successButton;
let failButton;

const removeSuccessModal = () => {
  main.removeChild(successPopup);
  successButton.removeEventListener('click', deleteSuccessPopup);
  document.removeEventListener('keydown', deleteSuccessPopupEsc);
  window.removeEventListener('click', deleteSuccessPopupOut);
}

const removeFailModal = () => {
  main.removeChild(failPopup);
  failButton.removeEventListener('click', deleteFailPopup);
  document.removeEventListener('keydown', deleteFailPopupEsc);
  window.removeEventListener('click', deleteFailPopupOut);
}

const setUserFormSubmit = (evt) => {
  evt.preventDefault();

  sendData(
    () => {
      toggleModal(pictureEditForm);
      resetUploadForm();

      const successElement = successPopupTemplate.cloneNode(true);
      main.appendChild(successElement);
      successPopup = main.querySelector('.success');
      successButton = successPopup.querySelector('.success__button');
      addSuccessEventListeners();
    },
    () => {
      toggleModal(pictureEditForm);
      resetUploadForm();

      const failElement = failPopupTemplate.cloneNode(true);
      main.appendChild(failElement);
      failPopup = main.querySelector('.error');
      failButton = failPopup.querySelector('.error__button');
      addFailEventListeners();
    },
    new FormData(evt.target),
  );
}

const addSuccessEventListeners = () => {
  successButton.addEventListener('click', deleteSuccessPopup);
  document.addEventListener('keydown', deleteSuccessPopupEsc);
  window.addEventListener('click', deleteSuccessPopupOut);
}

const addFailEventListeners = () => {
  failButton.addEventListener('click', deleteFailPopup);
  document.addEventListener('keydown', deleteFailPopupEsc);
  window.addEventListener('click', deleteFailPopupOut);
}

const deleteSuccessPopup = () => {
  removeSuccessModal();
}

const deleteSuccessPopupOut = (evt) => {
  if (evt.target == successPopup) {
    removeSuccessModal();
  }
}

const deleteSuccessPopupEsc = (evt) => {
  if (isEscEvent(evt) && !main.classList.contains('success')) {
    removeSuccessModal();
  }
}


const deleteFailPopup = () => {
  removeFailModal();
}

const deleteFailPopupOut = (evt) => {
  if (evt.target === failPopup) {
    removeFailModal();
  }
}

const deleteFailPopupEsc = (evt) => {
  if (isEscEvent(evt) && !main.classList.contains('fail')) {
    removeFailModal();
  }
}

export { setUserFormSubmit }
