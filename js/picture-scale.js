import { ZOOM_MIN, ZOOM_MAX, ZOOM_STEP } from './source-data.js';

const imgUploadPreview  = document.querySelector('.img-upload__preview');

const scaleContainer            = document.querySelector('.img-upload__scale');
const scaleControlValue         = scaleContainer.querySelector('.scale__control--value');
const incrementScaleValueButton = scaleContainer.querySelector('.scale__control--bigger');
const decrementScaleValueButton = scaleContainer.querySelector('.scale__control--smaller');


const scalePicture = () => {
  let scaleValue;

  incrementScaleValueButton.addEventListener('click', () => {
    scaleValue = parseInt(scaleControlValue.value);
    if (scaleValue < ZOOM_MAX) {
      scaleValue += ZOOM_STEP;
      scaleControlValue.value = `${scaleValue}%`;
      imgUploadPreview.querySelector('img').style = `transform: scale(${scaleValue / 100})`;
      console.log('event');
    }
  });

  decrementScaleValueButton.addEventListener('click', () => {
    scaleValue = parseInt(scaleControlValue.value);
    if (scaleValue > ZOOM_MIN) {
      scaleValue -= ZOOM_STEP;
      scaleControlValue.value = `${scaleValue}%`;
      imgUploadPreview.querySelector('img').style = `transform: scale(${scaleValue / 100})`;
    }
  });
}

export { scalePicture }
