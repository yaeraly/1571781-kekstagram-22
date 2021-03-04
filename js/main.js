import { photos } from './data.js'
import { renderPictures } from './picture-list.js';
import { showFullPhoto, uploadPicture, closeEditForm } from './big-picture.js';

renderPictures(photos);
uploadPicture();
closeEditForm();

const pictures  = document.querySelectorAll('.picture');
for (let i = 0; i < photos.length; i++) {
  showFullPhoto(pictures[i], photos[i]);
}

