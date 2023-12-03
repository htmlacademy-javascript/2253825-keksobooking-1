const adForm = document.querySelector ('.ad-form');
const formFilter = document.querySelector ('.map__filters');
const fieldsetElements = adForm.querySelectorAll('fieldset, select');


const inactiveForm = () => {

  adForm.classList.add('ad-form--disabled');
  formFilter.classList.add('map__filters--disabled');

  fieldsetElements.forEach((fieldsetElement) => {
    fieldsetElement.disabled = true;
  });
};

const activeForm = () => {
  adForm.classList.remove('ad-form--disabled');
  formFilter.classList.remove('map__filters--disabled');

  fieldsetElements.forEach((fieldsetElement) => {
    fieldsetElement.disabled = false;
  });
};


export { inactiveForm, activeForm };
