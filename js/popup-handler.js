import { togglePage, toggleElement, isEscEvent } from './util.js';

const onPopupClick = (button, modal) => {
  button.addEventListener('click', () => {
    togglePage();
    toggleElement(modal);
  });
}

const onPopupEscKeydown = (modal) => {
  document.addEventListener('keydown', (evt) => {
    if(isEscEvent(evt) && !modal.classList.contains('hidden')) {
      togglePage();
      toggleElement(modal);
    }
  });
}

export { onPopupClick, onPopupEscKeydown }
