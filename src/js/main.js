import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';
import publicationsSlider from './publicationsSlider';
import ourClientsSlider from './ourClientsSlider';
import qualitySlider from './qualitySlider';
import actualNewsSlider from './actualNewsSlider';
import leadersSlider from './leadersSlider';
import anchorLinks from './anchorLinks';
import clientsReviews from './clientsReviews';

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
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
