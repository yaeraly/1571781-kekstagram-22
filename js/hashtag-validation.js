import { debounce } from './util.js';

const HASHTAG_MAX_LENGTH = 20;
const HASHTAG_QUANTITY = 5;

const validateHashtagQuantity = (hashtags) => {
  return hashtags.length > HASHTAG_QUANTITY;
}

const validateHasgtagLength = (hashtags) => {
  for (let i = 0; i < hashtags.length; i++) {
    if (hashtags[i].length > HASHTAG_MAX_LENGTH) {
      return true;
    }
  }
  return false;
}

const isHashtagStartsWithHash = (hashtags) => {
  for (let i = 0; i < hashtags.length; i++) {
    if (hashtags[i].charAt(0) !== '#') {
      return true;
    }
  }
  return false;
}

const isHashtagUnique = (hashtags) => {
  return new Set(hashtags).size !== hashtags.length;
}

const isEmptyHashtag = (hashtagInput) => {
  return hashtagInput.value === '#' || hashtagInput.value.includes('# ');
}

const hasSpecialSymbols = (hashtags) => {
  for (let i = 0; i < hashtags.length; i++) {
    for (let j = 1; j < hashtags[i].length; j++) {
      if (!/^[0-9A-Za-z]+$/.test(hashtags[i][j])) {
        return true;
      }
    }
  }
  return false;
}


const validateHashtags = (hashtagInput) => {

  const validateHashtag = () => {
    const hashtags = hashtagInput.value.toLowerCase().split(' ').filter((item) => !!item
      return item !== ''
    });

    if (validateHashtagQuantity(hashtags)) {
      hashtagInput.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
    } else if (isHashtagStartsWithHash(hashtags)) {
      hashtagInput.setCustomValidity('Хэш-тег должен начинаться с символа # (решётка)');
    } else if (isEmptyHashtag(hashtagInput)) {
      hashtagInput.setCustomValidity('Хеш-тег не может состоять только из одной решётки');
    } else if (isHashtagUnique(hashtags)) {
      hashtagInput.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
    } else if (validateHasgtagLength(hashtags)) {
      hashtagInput.setCustomValidity('Максимальная длина хэш-тега 20 символов, включая решётку');
    } else if (hasSpecialSymbols(hashtags)) {
      hashtagInput.setCustomValidity('Хеш-тег после решётки должен состоять только из букв и чисел');
    } else {
      hashtagInput.setCustomValidity('');
    }
    hashtagInput.reportValidity();
  }




  return debounce(validateHashtag, 200);
}

export { validateHashtags }


// хэш-тег начинается с символа # (решётка);

// строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;

// хеш-тег не может состоять только из одной решётки;

// максимальная длина одного хэш-тега 20 символов, включая решётку;

// хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;

// один и тот же хэш-тег не может быть использован дважды;

// нельзя указать больше пяти хэш-тегов;

