const cardTemplate = document.querySelector ('#card').content.querySelector('.popup');


const accomodationOfferType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};


const hideBlockContent = (block, data) => {
  if (!data) {
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

  const {title, address, price, type, rooms, guests, checkin,
    checkout, features, photos, description} = offer;

  const cardElement = cardTemplate.cloneNode(true);

  const offerDescription = cardElement.querySelector('.popup__description');
  cardElement.querySelector('.popup__title').textContent = title;
  cardElement.querySelector('.popup__text--address').textContent = address;
  cardElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = accomodationOfferType[type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  cardElement.querySelector('.popup__description').textContent = description;

  hideBlockContent(offerDescription, description);
  getFeaturesList(cardElement, features);
  getPhotosList(cardElement, photos);

  return cardElement;
};

export { createAdvertCard };

