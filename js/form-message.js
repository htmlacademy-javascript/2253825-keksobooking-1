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

  alertContainer.style.right = '0';
  alertContainer.style.left = '0';
  alertContainer.style.backgroundColor = 'ligth-grey';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.zIndex = '100';
  alertContainer.style.padding = '2px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'red';
  alertContainer.style.position = 'fixed';
  alertContainer.style.top = '0';
  alertContainer.textContent = 'Ошибка загрузки данных! Попробуйте обновить страницу!';

  document.body.appendChild(alertContainer);
};


export { showAlertMessage, showSuccessMessage, showErrorMessage };
