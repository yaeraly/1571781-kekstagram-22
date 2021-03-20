import { showAlert } from './util.js';

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if(response.ok) {
        return response.json();
      }

      showAlert('Не удалось загрузить изображений с удаленного сервера. Попробуйте ещё раз');
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch(() => {
      showAlert('Не удалось загрузить изображений с удаленного сервера. Попробуйте ещё раз');
    });
}

const sendData = (onSuccess, onFail, body) => {
  fetch('https://22.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if(response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    })
}

export { getData, sendData }
