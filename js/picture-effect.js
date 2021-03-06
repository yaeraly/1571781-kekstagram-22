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


const addRadioboxHandler = (radiobox, {name, min, max, step, start, suffix}) => {
  radiobox.addEventListener('change', (evt) => {
    if (name === 'origin') {
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
          to: function (value) {
            if (suffix){
              return `filter: ${name}(${value}${suffix})`;
            }
            return `filter: ${name}(${value})`;
          },
          from: function(value) {
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

for (let i = 0; i < effects.length; i++) {
  addRadioboxHandler(effects[i], PICTURE_EFFECTS[i]);
}
