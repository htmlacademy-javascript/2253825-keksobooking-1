import { generateAccommodationOffers } from './data.js';
import { toggleFormState } from './form-settings.js';
import { setupValidatedForm } from './form-validation.js';
import { getRenderedMap } from './map.js';


getRenderedMap(generateAccommodationOffers());

setupValidatedForm();

toggleFormState();

