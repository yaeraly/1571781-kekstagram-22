import { showFullPhoto } from './big-picture.js';
import { renderPictures } from './picture-list.js';
import { uploadPicture } from './picture-upload.js';
import { getData } from './fetch-api.js';
import './picture-effect.js';


getData(
  (images) => {
    renderPictures(images);

    const pictures  = document.querySelectorAll('.picture');
    images.forEach((photo, index) => {
      showFullPhoto(pictures[index], photo);
    });
  },
);

uploadPicture();
