const adForm = document.querySelector ('.ad-form');
const formFilter = document.querySelector ('.map__filters');
const fieldsetElements = adForm.querySelectorAll('fieldset, select');


const switchOnForm = (state) => {

  adForm.classList[state ? 'remove' : 'add' ]('ad-form--disabled');
  formFilter.classList[state ? 'remove' : 'add']('map__filters--disabled');

  fieldsetElements.forEach((fieldsetElement) => {
    fieldsetElement.disabled = !state;
  });
};


export { switchOnForm };
