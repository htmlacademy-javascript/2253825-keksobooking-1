import { setupValidatedForm } from './form-validation.js';
import { getRenderedMap } from './map.js';
import { getData } from './api.js';
import { showAlertMessage } from './form-message.js';
import { getFilteredAccomodation } from './filters.js';
import { getImages } from './photo.js';


const loadingMap = () => {
  getData()
    .then((offers) => {
      getFilteredAccomodation(offers);
    })
    .catch(
      (err) => {
        showAlertMessage(err.message);
      }
    );
};


getRenderedMap(loadingMap);
setupValidatedForm();
getImages();

