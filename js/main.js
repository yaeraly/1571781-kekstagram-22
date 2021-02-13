const names = [
  'Алиса',
  'Александра',
  'Анжелика',
  'Анна',
  'Валентина',
  'Валерия',
  'Вера',
  'Вероника',
  'Виктория',
  'Галина',
  'Дарья',
  'Диана',
  'Евгения',
  'Екатерина',
  'Алёна',
  'Елена',
  'Елизавета',
  'Жанна',
  'Карина',
  'Кристина',
  'Ксения',
  'Иван',
  'Игорь',
  'Илья',
  'Кирилл',
  'Константин',
  'Лев',
  'Леонид',
  'Максим',
  'Марк',
  'Матвей',
  'Михаил',
  'Никита',
  'Роман',
  'Руслан',
  'Сергей',
  'Степан',
  'Тимур',
  'Фёдор',
  'Юрий',
  'Ярослав',
]

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

const descriptions = [
  'Когда радости нет предела.',
  'Грусть, я тебя не боюсь.',
  'Любовь в каждом пикселе.',
  'Фото, заряженное на позитив.',
  'Улыбаюсь новому дню.',
  'Я не плачу — это просто дождь.',
  'Теплые воспоминания в холодное время года.',
  'В диком восторге от происходящего.',
  'Знали бы вы, что у меня на уме.',
  'Где надо, там и где. Угадаете место?',
  'Что это, если не любовь?',
]

const getRandomNumber = (min, max) => {

  if (min < 0) {
    return 'Начало диапазона должно быть положительным числом';
  }

  if (min >= max) {
    return 'Начало диапазона должно быть меньше чем конец';
  }

  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const getRandomArrayElement = (arr) => {
  return arr[getRandomNumber(0, arr.length - 1)];
}

const createComments = (numOfComments) => {
  let userComments = [];
  let uniqueIdNumbers = [];

  for (let i = 0; i < numOfComments; i++) {
    let isIdNumberUnique = false;

    while (!isIdNumberUnique) {
      const idNumber = getRandomNumber(1, 1000);

      if (uniqueIdNumbers.indexOf(idNumber) === -1) {
        uniqueIdNumbers.push(idNumber);
        userComments.push(postComment(idNumber));
        isIdNumberUnique = true;
      }
    }
  }
  return userComments;
}

const validateStringMaxLength = (string, maxLength = 140) => {
  return string.length <= maxLength;
}

const postPhoto = (number) => {
  let numberOfComments = getRandomNumber(1, 20);

  return {
    id: number,
    url: `photos/${number}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomNumber(15, 200),
    comments: createComments(numberOfComments),
  }
}

const postComment = (number) => {
  return {
    id: number,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(comments),
    name: getRandomArrayElement(names),
  }
}

const PHOTO_COUNT = 25;

let photos = new Array(PHOTO_COUNT).fill(null).map((_, index) => postPhoto(index + 1));
