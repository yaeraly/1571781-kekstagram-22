import { isEscEvent } from './util.js';
import { PAGE, PAGE_CLASS_NAME } from './source-data.js';


const onPopupEvent = (eventType, button, modal) => {
  button.addEventListener(eventType, () => {
    PAGE.classList.toggle(PAGE_CLASS_NAME);
    modal.classList.toggle('hidden');
  });
}

const onPopupEscKeydown = (modal) => {
  document.addEventListener('keydown', (evt) => {
    if(isEscEvent(evt) && !modal.classList.contains('hidden')) {
      PAGE.classList.toggle(PAGE_CLASS_NAME);
      modal.classList.toggle('hidden');
    }
  });
}

export { onPopupEvent, onPopupEscKeydown }
