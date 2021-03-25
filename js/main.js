import { uploadPicture } from './picture-upload.js';
import { renderPictureList } from './picture-list.js';
import { showFilterContainer, setPictureFilter } from './picture-filter.js';
import { getData } from './fetch-api.js';
import './picture-effect.js';


getData(
  (images) => {
    renderPictureList(images);
    showFilterContainer();
    setPictureFilter(images);
  },
);

uploadPicture();
