import phoneMask from './utils/phoneMask';
import validation from './utils/validation';
import locationMap from './cities/locationMap';
document.addEventListener('DOMContentLoaded', function() {
    phoneMask();
    validation();
    locationMap();
});