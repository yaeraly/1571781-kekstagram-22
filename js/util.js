import { COMMENT_COUNT, PAGE, PAGE_CLASS_NAME } from './source-data.js';

const makeUniqueRandomIntegerGenerator = (min, max) => {
  const uniqueNumbers = [];

  return () => {
    let randomNumber = getRandomNumber(min, max);

    if (uniqueNumbers.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }

    while (uniqueNumbers.includes(randomNumber)) {
      randomNumber = getRandomNumber(min, max);
    }

    uniqueNumbers.push(randomNumber);
    return randomNumber;
  }
}

const getUniqueRandomInteger = makeUniqueRandomIntegerGenerator(0, COMMENT_COUNT);

const getArrayRange = (arr) => {
  return arr.slice(getRandomNumber(0, arr.length-1));
}

const getRandomNumber = (min, max) => {

  if (min < 0) {
    return 'Начало диапазона должно быть положительным числом';
  }

  if (min >= max) {
    return 'Начало диапазона должно быть меньше чем конец';
  }

  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const getRandomArrayElement = (arr, neededElements = 1) => {
  const lastArrIndex = arr.length - 1;

  if (neededElements > 1) {
    return new Array(neededElements).fill(null).map(() => arr[getRandomNumber(0, lastArrIndex)]).join(' ');
  }

  return arr[getRandomNumber(0, lastArrIndex)];
}

const validateStringMaxLength = (string, maxLength = 140) => {
  return string.length <= maxLength;
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const showAlert = (alertMessage) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = alertMessage;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
}

const toggleModal = (popup, tagName='hidden') => {
  PAGE.classList.toggle(PAGE_CLASS_NAME);
  popup.classList.toggle(tagName);
}

const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    const callFunc = () => func.apply(this, args);
    clearTimeout(timer);
    timer = setTimeout(callFunc, timeout);
  };
};

export {
  makeUniqueRandomIntegerGenerator,
  validateStringMaxLength,
  getUniqueRandomInteger,
  getRandomArrayElement,
  getRandomNumber,
  getArrayRange,
  toggleModal,
  isEscEvent,
  showAlert,
  debounce
}
