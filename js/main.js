const PHOTO_COUNT = 25;
const COMMENT_COUNT = 50;

const NAMES = [
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

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

const DESCRIPTIONS = [
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

const UNIQUE_ID_NUMBERS = [];

const getUniqueId = () => {
  let isUnique = false;

  while (!isUnique) {
    let randomNumber = getRandomNumber(0, 1000);

    if (UNIQUE_ID_NUMBERS.indexOf(randomNumber) === -1) {
      UNIQUE_ID_NUMBERS.push(randomNumber);
      return randomNumber;
    }
  }
}

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

// const validateStringMaxLength = (string, maxLength = 140) => {
//   return string.length <= maxLength;
// }

const postPhoto = (number) => {
  return {
    id: number,
    url: `photos/${number}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: getArrayRange(userComments),
  }
}

const postComment = () => {
  const NEEDED_COMMENTS = getRandomNumber(1, 2);

  return {
    id: getUniqueId(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS, NEEDED_COMMENTS),
    name: getRandomArrayElement(NAMES),
  }
}

let userComments = new Array(COMMENT_COUNT).fill(null).map(() => postComment());

let photos = new Array(PHOTO_COUNT).fill(null).map((_, index) => postPhoto(index + 1));

alert(photos);

