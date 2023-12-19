const successMessage = document.querySelector ('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector ('#error').content.querySelector('.error').cloneNode(true);
const errorButton = errorMessage.querySelector ('.error__button');


const removeSuccessMessage = () => {
  successMessage.remove();
};


const removeErrorMessage = () => {
  errorMessage.remove();
};


const onEscClick = (evt) => {
  if (evt.code === 'Escape') {
    removeSuccessMessage();
    removeErrorMessage();
    document.removeEventListener('keydown', onEscClick);
  }
};


const onOverlayClick = () => {

  removeSuccessMessage();
  removeErrorMessage();
  document.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onEscClick);
};


const showSuccessMessage = () => {

  document.body.appendChild(successMessage);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onEscClick);
};


const showErrorMessage = () => {

  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', onEscClick);
  document.addEventListener('click', onOverlayClick);
  errorButton.addEventListener('click', removeErrorMessage);
};


const showAlertMessage = () => {

  const alertContainer = document.createElement('div');

  const styleList = {
    right: '0',
    left: '0',
    backgroundColor: 'ligth-grey',
    fontSize: '25px',
    zIndex: '100',
    padding: '2px',
    textAlign: 'center',
    color: 'red',
    position: 'fixed',
    top: '0',
  };

  Object.assign(alertContainer.style, styleList);

  alertContainer.textContent = 'Ошибка загрузки данных! Попробуйте обновить страницу!';

  document.body.appendChild(alertContainer);
};


export { showAlertMessage, showSuccessMessage, showErrorMessage };
