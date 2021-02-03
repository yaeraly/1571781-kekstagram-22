const getRandomNumber = (min, max) => {
  if (min < 0) {
    return 'Начало диапазона должно быть положительным числом';
  }
  else if (min >= max) {
    return 'Начало диапазона должно быть меньше чем конец';
  }

  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

getRandomNumber(0, 100);

