import { resetMap } from './map.js';
import { resetSlider } from './price-slider.js';
import { resetFilters } from './filters.js';
import { resetPreviews } from './photo.js';


const adForm = document.querySelector ('.ad-form');
const formFilter = document.querySelector ('.map__filters');
const fieldsetElements = adForm.querySelectorAll('fieldset, select');
const submitButton = adForm.querySelector('.ad-form__submit');
const resetButton = adForm.querySelector('.ad-form__reset');


const resetForm = () => {
  resetSlider();
  adForm.reset();
  resetMap();
  resetPreviews();
  resetFilters();
};


resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});


const switchDisableState = (state) => {
  submitButton.disabled = state;
};


const switchOnForm = (state) => {

  adForm.classList[state ? 'remove' : 'add' ]('ad-form--disabled');
  formFilter.classList[state ? 'remove' : 'add']('map__filters--disabled');

  fieldsetElements.forEach((fieldsetElement) => {
    fieldsetElement.disabled = !state;
  });
};


export { switchOnForm, switchDisableState, resetForm };
