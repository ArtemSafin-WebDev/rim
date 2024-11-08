import polyfills from './utils/polyfills';
import './utils/lazyload';
import detectTouch from './utils/detectTouch';
import setScrollbarWidth from './utils/setScrollbarWidth';
import validation from './utils/validation';
import customSelects from './utils/customSelects';
import phoneMask from './utils/phoneMask';
import onlyNumeric from './utils/onlyNumeric';
import fileUpload from './utils/fileUpload';
import publicationsSlider from './main/publicationsSlider';
import ourClientsSlider from './main/ourClientsSlider';
import qualitySlider from './main/qualitySlider';
import actualNewsSlider from './main/actualNewsSlider';
import leadersSlider from './main/leadersSlider';
import anchorLinks from './main/anchorLinks';
import clientsReviews from './main/clientsReviews';
import modals from './utils/modal';
import geographyInnerSliders from './main/geographyLeadersInnerSlider';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
    publicationsSlider();
    ourClientsSlider();
    qualitySlider();
    actualNewsSlider();
    leadersSlider();
    anchorLinks();
    clientsReviews();

    modals();
    geographyInnerSliders();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
