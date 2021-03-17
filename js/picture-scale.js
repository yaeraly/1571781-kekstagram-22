import { ZOOM_MIN, ZOOM_MAX, ZOOM_STEP } from './source-data.js';

const previewPicture  = document.querySelector('.img-upload__preview').querySelector('img');
const scaleValueInput = document.querySelector('.scale__control--value');


const incrementScaleValue = () => {
  let incrementValue = parseInt(scaleValueInput.value);

  if (incrementValue < ZOOM_MAX) {
    incrementValue += ZOOM_STEP;
    scaleValueInput.value = `${incrementValue}%`;
    previewPicture.style = `transform: scale(${incrementValue / 100})`;
  }
}

const decrementScaleValue = () => {
  let decrementValue = parseInt(scaleValueInput.value);

  if (decrementValue > ZOOM_MIN) {
    decrementValue -= ZOOM_STEP;
    scaleValueInput.value = `${decrementValue}%`;
    previewPicture.style = `transform: scale(${decrementValue / 100})`;
  }
}

export { incrementScaleValue, decrementScaleValue }
