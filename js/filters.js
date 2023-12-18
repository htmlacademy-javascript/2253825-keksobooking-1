import { clearMarkers, renderMarkers } from'./map.js';
import { debounce } from './util.js';


const MAX_MARKERS = 10;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const DEFAULT_VALUE = 'any';
const TIMEOUT_DELAY = 500;

const housingType = document.querySelector('#housing-type');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingPrice = document.querySelector('#housing-price');
const featuresFilter = document.querySelectorAll('[name=features]');
const mapFilters = document.querySelector('.map__filters');


const priceFilter = {
  any: () => true,
  middle: (value) => value >= LOW_PRICE && value <= HIGH_PRICE,
  low: (value) => value <= LOW_PRICE,
  high: (value) => value >= HIGH_PRICE,
};


const isDefaultElement = (selected) => selected.value === DEFAULT_VALUE;

const filterOfferElement = (offer, housing) => offer === Number(housing.value) || isDefaultElement(housing);

const filterByType = (offer) => offer.type === housingType.value || isDefaultElement(housingType);

const filterByRooms = (offer) => filterOfferElement(offer.rooms, housingRooms);

const filterByGuests = (offer) => filterOfferElement(offer.guests, housingGuests);

const filterByPrice = (offer, priceCheck) => priceCheck(offer.price) || isDefaultElement(housingPrice);


const setFilterByFeatures = ({features}, featuresCheck) => {

  if (!featuresCheck.length) {
    return true;
  }
  return features && featuresCheck.every((element) => features.includes(element.value));
};


const setFilterByOffer = (offers) => {

  const priceCheck = priceFilter[housingPrice.value];
  const featuresCheck = [...featuresFilter].filter((feature) => feature.checked);

  return offers.filter(({offer}) => (
    filterByRooms(offer) &&
    filterByType(offer) &&
    filterByGuests(offer) &&
    filterByPrice(offer, priceCheck) &&
    setFilterByFeatures(offer, featuresCheck)
  ));
};


const getFilteredOffers = (offers) => {

  clearMarkers();

  const filteredData = setFilterByOffer(offers);

  renderMarkers(filteredData.slice(0, MAX_MARKERS));
};


const resetFilters = () => {
  mapFilters.reset();
};


const getFilteredAccomodation = (offers) => {

  mapFilters.addEventListener('change', debounce(() => getFilteredOffers(offers), TIMEOUT_DELAY));
  mapFilters.addEventListener('reset', debounce(() => getFilteredOffers(offers), TIMEOUT_DELAY));
};


export { getFilteredAccomodation, resetFilters };
