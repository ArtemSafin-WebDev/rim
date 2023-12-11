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

import initMediametryTabs from "./drive/mediametryTabs";
import initCarMediametryAnimation from "./drive/mediametryCardAnimate";
import initAllocationCarAnimate from "./drive/allocationCarAnimate";
import initReportsAnimation from "./drive/reportsAnimation";
import initAboutOccurAnimation from "./drive/aboutOccurAnimation";
import initMediumsImagesAnimation from "./drive/animateMediumsImages";
import initAdvantagesOccurAnimation from "./drive/advantagesOccurAnimation";
import initNavigation from "./drive/driveNavigation";
import initBagsOccurAnimation from "./drive/bagsOccurAnimation";
import initTermsOccurAnimation from "./drive/termsOccurAnimation";
import initAllocationOccurAnimation from "./drive/allocationOccurAnimation";
import initBrandingSliders from "./drive/brandingSliders";
import initBrandingTabs from "./drive/brandingTabs";
import initIntroOccurAnimation from "./drive/introOccurAnimation";

document.addEventListener('DOMContentLoaded', function() {
  polyfills();
  detectTouch();
  setScrollbarWidth();
  validation();
  customSelects();
  phoneMask();
  onlyNumeric();
  anchorLinks();
  modals();
  
  initMediametryTabs()
  initCarMediametryAnimation()
  initAllocationCarAnimate()
  initAboutOccurAnimation()
  initReportsAnimation()
  initMediumsImagesAnimation()
  initAdvantagesOccurAnimation()
  initNavigation()
  initBagsOccurAnimation()
  initTermsOccurAnimation()
  initAllocationOccurAnimation()
  initBrandingSliders()
  initIntroOccurAnimation()
});

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  setTimeout(() => document.body.classList.add('animatable'), 300);
});
