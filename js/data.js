import { PHOTO_COUNT, COMMENT_COUNT, NAMES, COMMENTS, DESCRIPTIONS } from './source-data.js'
import { getUniqueRandomInteger, getArrayRange, getRandomNumber, getRandomArrayElement } from './util.js';

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
  const neededComments = getRandomNumber(1, 2);

  return {
    id: getUniqueRandomInteger(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS, neededComments),
    name: getRandomArrayElement(NAMES),
  }
}

let userComments = new Array(COMMENT_COUNT).fill(null).map(() => postComment());

let photos = new Array(PHOTO_COUNT).fill(null).map((_, index) => postPhoto(index + 1));

export { photos }
