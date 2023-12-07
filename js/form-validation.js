const adForm = document.querySelector ('.ad-form');
const adTitle = adForm.querySelector('#title');
const adPrice = adForm.querySelector('#price');
const housingType = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const numberOfRoom = adForm.querySelector('#room_number');
const residentsNumber = adForm.querySelector('#capacity');

const MIN_TITLE_SYMBOLS = 30;
const MAX_TITLE_SYMBOLS = 100;
const MAX_STAY_PRICE = 100000;

const MIN_STAY_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const CAPACITY_LIMIT = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const GUESTS_LIMIT = {
  1: ['комната для размещения 1 гостя'],
  2: ['комнаты для размещения от 1 до 2 гостей'],
  3: ['комнаты для размещения от 1 до 3 гостей'],
  100: ['комнат не для гостей']
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

const getValidTitle = (title) => title.length >= MIN_TITLE_SYMBOLS && title.length <= MAX_TITLE_SYMBOLS;

const getErrorNoticeTitle = () => `Не менее ${ MIN_TITLE_SYMBOLS } и не более ${ MAX_TITLE_SYMBOLS } символов`;

const getValidPrice = (price) => price >= MIN_STAY_PRICE[housingType.value] && price <= MAX_STAY_PRICE;

const getErrorNoticePrice = () => `Цена от ${ MIN_STAY_PRICE[housingType.value] } до ${ MAX_STAY_PRICE }`;

const getValidRoom = () => CAPACITY_LIMIT[numberOfRoom.value].includes(residentsNumber.value);


const getErrorNoticeRoom = () =>
  `Условия бронирования: ${numberOfRoom.value} ${GUESTS_LIMIT[numberOfRoom.value]} `;


const getChangedPrice = () => {
  adPrice.placeholder = MIN_STAY_PRICE[housingType.value];
  pristine.validate(adPrice);
};


const getChangedTime = (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
};


const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};


const setupValidatedForm = () => {

  pristine.addValidator(adTitle, getValidTitle, getErrorNoticeTitle);
  pristine.addValidator(adPrice, getValidPrice, getErrorNoticePrice);
  pristine.addValidator(residentsNumber, getValidRoom, getErrorNoticeRoom);
  pristine.addValidator(numberOfRoom, getValidRoom, getErrorNoticeRoom);

  housingType.addEventListener ('change', getChangedPrice);
  timeIn.addEventListener ('change', getChangedTime);
  timeOut.addEventListener ('change', getChangedTime);
  adForm.addEventListener('submit', onFormSubmit);
};


export { setupValidatedForm };
