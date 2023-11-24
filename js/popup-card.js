import { generateAccommodationOffers } from './data.js';


const cardContainer = document.querySelector ('#map-canvas');
const cardTemplate = document.querySelector ('#card').content.querySelector('.popup');


const accomodationOfferType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};


const hideBlockContent = (block, data) => {

  if(!data || data === 0) {
    block.style.display = 'none';
  }
};


const getFeaturesList = (element, features) => {

  const featuresContainer = element.querySelector('.popup__features');
  const featureList = element.querySelector('.popup__feature');
  hideBlockContent(featuresContainer, features);
  featuresContainer.innerHTML = '';

  features.forEach ((feature) => {
    const featureElement = featureList.cloneNode(true);
    featureElement.classList = `popup__feature popup__feature--${ feature}`;
    featuresContainer.append(featureElement);
  });
};


const getPhotosList = (element, photos) => {

  const photosContainer = element.querySelector('.popup__photos');
  const photoList = element.querySelector('.popup__photo');
  hideBlockContent(photosContainer, photos);
  photosContainer.innerHTML = '';

  photos.forEach ((photo) => {
    const photoElement = photoList.cloneNode(true);
    photoElement.src = photo;
    photosContainer.append(photoElement);
  });
};


const createAdvertCard = ({offer, author}) => {

  const cardElement = cardTemplate.cloneNode(true);

  const description = cardElement.querySelector('.popup__description');
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = accomodationOfferType[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__avatar').srv = author.avatar;

  getFeaturesList(cardElement, offer.features);
  getPhotosList(cardElement, offer.photos);
  hideBlockContent(description, offer.description);

  return cardElement;
};


const createAccomodationCard = () => {

  const offerElement = generateAccommodationOffers();
  const cardElement = createAdvertCard(offerElement[0]);


  return cardContainer.appendChild(cardElement);
};


export { createAccomodationCard };


