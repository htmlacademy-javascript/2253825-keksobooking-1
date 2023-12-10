import { generateAccommodationOffers } from './data.js';
import { setupValidatedForm } from './form-validation.js';
import { getRenderedMap } from './map.js';


getRenderedMap(generateAccommodationOffers());

setupValidatedForm();


