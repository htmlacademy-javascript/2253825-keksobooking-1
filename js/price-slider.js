const adPrice = document.querySelector('#price');
const sliderElement = document.querySelector('.ad-form__slider');
const MAX_STAY_PRICE = 100000;


noUiSlider.create(sliderElement, {
  start: 0,
  step: 1000,
  range: {
    min: 0,
    max: MAX_STAY_PRICE,
  },
});


sliderElement.noUiSlider.on('update', () => {
  adPrice.value = parseInt(sliderElement.noUiSlider.get(), 10);
});


const onPriceSliderUpdate = (price) => {
  sliderElement.noUiSlider.set([price]);
};


const resetSlider = () => {
  sliderElement.noUiSlider.reset();
};


export { onPriceSliderUpdate, resetSlider };
