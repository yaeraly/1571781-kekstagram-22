import { photos } from './data.js'
import { showFullPhoto } from './big-picture.js';
import { renderPictures } from './picture-list.js';
import { uploadPicture } from './picture-upload.js';
import './picture-effect.js';




renderPictures(photos);
uploadPicture();

const pictures  = document.querySelectorAll('.picture');

photos.forEach((photo, index) => {
  showFullPhoto(pictures[index], photo);
});
