const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const inputElement = document.querySelectorAll ('.ad-form input[type=file]');
const avatarPreview = document.querySelector ('.ad-form-header__preview img');
const housingPreview = document.querySelector ('.ad-form__photo');


const getImages = () => {

  inputElement.forEach((element) => {
    element.addEventListener('change', () => {

      const file = element.files[0];
      const fileName = file.name.toLowerCase();

      const equalFile = FILE_TYPES.some((it) => fileName.endsWith(it));

      if (equalFile && element.classList.contains('ad-form-header__input')) {
        avatarPreview.src = URL.createObjectURL(file);
      }

      if (equalFile && element.classList.contains('ad-form__input')) {

        const housingImage = document.createElement('img');

        housingImage.style.width = '100%';
        housingImage.style.height = '100%';
        housingImage.src = URL.createObjectURL(file);
        housingPreview.appendChild(housingImage);
      }
    });
  });
};


const resetPreviews = () => {

  housingPreview.innerHTML = '';
  avatarPreview.src = 'img/muffin-grey.svg';
};


export { getImages, resetPreviews };

