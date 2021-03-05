const imgUploadPreview  = document.querySelector('.img-upload__preview');

const scaleContainer            = document.querySelector('.img-upload__scale');
const scaleControlValue         = scaleContainer.querySelector('.scale__control--value');
const incrementScaleValueButton = scaleContainer.querySelector('.scale__control--bigger');
const decrementScaleValueButton = scaleContainer.querySelector('.scale__control--smaller');


const scalePicture = () => {
  let scaleValue;

  incrementScaleValueButton.addEventListener('click', () => {
    scaleValue = parseInt(scaleControlValue.value);
    if (scaleValue < 100) {
      scaleValue += 25;
      scaleControlValue.value = `${scaleValue}%`;
      imgUploadPreview.querySelector('img').style = `transform: scale(${scaleValue / 100})`;
    }
  });

  decrementScaleValueButton.addEventListener('click', () => {
    scaleValue = parseInt(scaleControlValue.value);
    if (scaleValue > 25) {
      scaleValue -= 25;
      scaleControlValue.value = `${scaleValue}%`;
      imgUploadPreview.querySelector('img').style = `transform: scale(${scaleValue / 100})`;
    }
  });
}

export { scalePicture }
