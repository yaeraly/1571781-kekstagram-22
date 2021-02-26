import { photos } from './data.js'
import { renderPictures } from './picture-list.js';
import { showFullPhoto } from './picture-big.js';

renderPictures(photos);

const pictures  = document.querySelectorAll('.picture');
for (let i = 0; i < photos.length; i++) {
  showFullPhoto(pictures[i], photos[i]);
}
