import { sendData } from './fetch-api.js';
import { resetUploadForm } from './picture-upload.js';
import { isEscEvent, toggleModal } from './util.js';

const main              = document.querySelector('main');
const successPopup      = document.querySelector('#success').content.querySelector('.success');
const failPopup         = document.querySelector('#error').content.querySelector('.error');
const pictureEditForm   = document.querySelector('.img-upload__overlay');

const successButton     = successPopup.querySelector('.success__button');
const failButton        = failPopup.querySelector('.error__button');

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

      const node = successPopup.cloneNode(true);
      main.appendChild(successPopup);

      addEventListeners('success');
    },
    () => {
      toggleModal(pictureEditForm);
      resetUploadForm();

      failPopup.cloneNode(true);
      main.appendChild(failPopup);

      addEventListeners('fail');
    },
    new FormData(evt.target),
  );
}

const addEventListeners = (modal) => {
  if (modal === 'success') {
    successButton.addEventListener('click', deleteSuccessPopup);
    document.addEventListener('keydown', deleteSuccessPopupEsc);
    window.addEventListener('click', deleteSuccessPopupOut);
  } else if (modal === 'fail') {
    failButton.addEventListener('click', deleteFailPopup);
    document.addEventListener('keydown', deleteFailPopupEsc);
    window.addEventListener('click', deleteFailPopupOut);
  }
}

const deleteSuccessPopup = () => {
  removeSuccessModal();
}

const deleteSuccessPopupOut = (evt) => {
  if (evt.target === successPopup) {
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
