import { photos } from './data.js'
import { showFullPhoto } from './big-picture.js';
import { scalePicture } from './picture-scale.js';
import { renderPictures } from './picture-list.js';
import { uploadPicture, closeEditForm } from './picture-upload.js';



renderPictures(photos);
uploadPicture();
closeEditForm();
scalePicture();

const pictures  = document.querySelectorAll('.picture');
for (let i = 0; i < photos.length; i++) {
  showFullPhoto(pictures[i], photos[i]);
}
