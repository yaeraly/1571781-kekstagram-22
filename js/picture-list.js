const renderPictures = (arr) => {
  const pictureContainer  = document.querySelector('.pictures');
  const pictureTemplate   = document.querySelector('#picture').content.querySelector('.picture');
  const fragment          = document.createDocumentFragment();

  arr.forEach(({ url, comments, likes }) => {
    const element = pictureTemplate.cloneNode(true);

    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__comments').textContent = comments.length;
    element.querySelector('.picture__likes').textContent = likes;

    fragment.appendChild(element);
  });

  pictureContainer.appendChild(fragment);
}

export { renderPictures }
