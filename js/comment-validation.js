import { validateStringMaxLength, debounce } from './util.js';

const validateComment = (commentInput) => {

  const validateCommentLength = () => {
    const isLongComment = validateStringMaxLength(commentInput.value);

    if (isLongComment) {
      commentInput.setCustomValidity('Длина комментария не может составлять больше 140 символов');
    } else {
      commentInput.setCustomValidity('');
    }
    commentInput.reportValidity();
  }

  return debounce(validateCommentLength, 200);
}

export { validateComment }
