const OFFER_COUNT = 10;
const TITLE = 'Предложение размещения';
const MAX_PRICE = 100000;
const ACCOMMODATION_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const MAX_ROOMS = 10;
const MAX_GUESTS = 20;
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const ACCOMMODATION_DESCRIPTION = 'Лучшее предложение размещения за такую цену!';
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;
const BIT_DEPTH = 5;


const getRandomCoordinates = (min, max, bitDepth) => {

  if (min < 0 || max < 0 || max < min) {
    return NaN;
  }

  const random = Math.random() * (max - min) + min;

  return random.toFixed(bitDepth);
};


const getRandomInteger = (a, b) => {

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];


const getRandomArray = (array) => {

  const randomArray = [];
  const randomLength = getRandomInteger(0, array.length);

  for (let i = 0; i < randomLength; i++) {
    randomArray.push(array[i]);
  }

  return randomArray.sort();
};


const getAvatar = () => {

  const avatarArray = [];
  let randomAvatar;

  while (!randomAvatar || avatarArray.includes(randomAvatar)) {
    randomAvatar = getRandomInteger(1, OFFER_COUNT);
  }

  avatarArray.push(randomAvatar);

  return {
    avatar: `img/avatars/user${randomAvatar.toString().padStart(2, '0')}.png`
  };
};


const accommodationOffer = (location) => ({
  title: TITLE,
  address: `${location.lat} - ${location.lng}`,
  price: getRandomInteger(1, MAX_PRICE),
  type: getRandomArrayElement(ACCOMMODATION_TYPE),
  rooms:  getRandomInteger(1, MAX_ROOMS),
  guests:  getRandomInteger(1, MAX_GUESTS),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: getRandomArray(FEATURES),
  description: ACCOMMODATION_DESCRIPTION,
  photos: getRandomArray(PHOTOS)
});


const accommodationLocation = () => ({
  lat: getRandomCoordinates(LAT_MIN, LAT_MAX, BIT_DEPTH),
  lng: getRandomCoordinates(LNG_MIN, LNG_MAX, BIT_DEPTH)
});


const accommodationBookingOffer = () => {

  const location = accommodationLocation();

  return {
    author: getAvatar(),
    offer: accommodationOffer(location),
    location
  };
};

accommodationBookingOffer();

