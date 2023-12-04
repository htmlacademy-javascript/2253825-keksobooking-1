const adForm = document.querySelector ('.ad-form');
const formFilter = document.querySelector ('.map__filters');
const fieldsetElements = adForm.querySelectorAll('fieldset, select');


const toggleFormState = (state = 'off') => {
  adForm.classList[state === 'on' ? 'remove' : 'add']('ad-form--disabled');
  formFilter.classList[state === 'on' ? 'remove' : 'add']('map__filters--disabled');

  fieldsetElements.forEach((fieldsetElement) => {
    fieldsetElement.disabled = state !== 'on';
  });
};


export { toggleFormState };
