const adForm = document.querySelector ('.ad-form');
const formFilter = document.querySelector ('.map__filters');
const fieldsetElements = adForm.querySelectorAll('fieldset, select');


const toggleFormState = (state) => {

  adForm.classList[state ? 'add' : 'remove']('ad-form--disabled');
  formFilter.classList[state ? 'add' : 'remove']('map__filters--disabled');

  fieldsetElements.forEach((fieldsetElement) => {
    fieldsetElement.disabled = false;
  });
};


export { toggleFormState };
