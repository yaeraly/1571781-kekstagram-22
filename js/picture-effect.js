import { PICTURE_EFFECTS } from './source-data.js';

const imgPicturePreview   = document.querySelector('.img-upload__preview');
const effectList          = document.querySelector('.effects__list');
const effects             = effectList.querySelectorAll('.effects__radio');
const imgPreviewClassName = imgPicturePreview.className;

const slider = document.querySelector('.effect-level__slider');

/* global noUiSlider:readonly */
noUiSlider.create(slider, {
  range: {
    'min': 0,
    'max': 1,
  },
  start: 0,
  step: 0.1,
});

slider.noUiSlider.on('update', (values, handler) => {
  imgPicturePreview.style = values[handler];
});


const addRadioboxHandler = (radiobox) => {
  const {effect, min, max, step, start, unit} = PICTURE_EFFECTS[radiobox.value];


  radiobox.addEventListener('change', (evt) => {
    if (!effect) {
      imgPicturePreview.style = '';
    }

    if (evt.target.checked) {
      imgPicturePreview.className = `${imgPreviewClassName} effects__preview--${radiobox.value}`;

      slider.noUiSlider.updateOptions({
        range: {
          'min': min,
          'max': max,
        },
        start: start,
        step: step,
        format: {
          to: (value) => {
            if (unit){
              return `filter: ${effect}(${value}${unit})`;
            }
            return `filter: ${effect}(${value})`;
          },
          from: (value) => {
            return value;
          },
        },
      });
    } else {
      slider.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 1,
        },
        start: 0,
        step: 0.1,
      });
    }
  });
}

effects.forEach((effect) => {
  addRadioboxHandler(effect);
});
