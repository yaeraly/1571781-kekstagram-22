const getRandomNumber = (min, max) => {

  if (min < 0) {
    return 'Начало диапазона должно быть положительным числом';
  }

  if (min >= max) {
    return 'Начало диапазона должно быть меньше чем конец';
  }

  return Math.floor((Math.random() * (max - min + 1)) + min);
}

getRandomNumber(1.5, 99.5);


const validateStringMaxLength = (string, maxLength = 140) => string.length <= maxLength;


validateStringMaxLength('HTML Academy');
