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

const toggleElement = (elementName, className = 'hidden') => {
  elementName.classList.toggle(className);
}

const togglePage = () => {
  PAGE.classList.toggle(PAGE_CLASS_NAME);
}

export {
  getUniqueRandomInteger,
  getArrayRange,
  getRandomNumber,
  getRandomArrayElement,
  validateStringMaxLength,
  isEscEvent,
  toggleElement,
  togglePage
}
