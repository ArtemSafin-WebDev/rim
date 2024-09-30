import polyfills from './utils/polyfills';
import './utils/lazyload';
import detectTouch from './utils/detectTouch';
import setScrollbarWidth from './utils/setScrollbarWidth';
import validation from './utils/validation';
import customSelects from './utils/customSelects';
import phoneMask from './utils/phoneMask';
import onlyNumeric from './utils/onlyNumeric';
import anchorLinks from './main/anchorLinks';
import modals from './utils/modal';
import smoothScrolling from './utils/lenis';
import loopAnimation from './utils/loopAnimation';

import intro from './drims/intro';
import cross from './drims/cross';
import scale from './drims/scale';
import initCasesAnimation from './drims/dreamsOverlay';
import initGallery from './drims/gallery';
import event from './drims/events';
import nostalgia from './drims/nostalgia';
import team from './drims/team';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    anchorLinks();
    smoothScrolling();
    loopAnimation();

    cross();
    intro();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);

    initCasesAnimation();
    scale();
    event();
    team();
    nostalgia();
    initGallery();
    modals();
});
