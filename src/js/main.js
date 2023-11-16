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
import modals from './modal';
import geographyInnerSliders from './geographyLeadersInnerSlider';
// #NOTE: dev-azat
import loopTape from "./loopTape";
import inventoryAnimation from "./inventory";
import loopClients from "./loopClients";
import headerAnimation from "./redtagHeader";
import marketLoopAnimation from "./marketLoop";

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
    // #NOTE: dev-azat
    loopTape()
    inventoryAnimation()
    loopClients()
    headerAnimation()
    marketLoopAnimation()
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
