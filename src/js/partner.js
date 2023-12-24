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

import initLoopTasks from "./partner/initLoopTasks";
import initAdvantagesSlider from "./partner/advantagesSlider";
import initPartnerSlider from "./partner/partnerSlider";
import initEntrySlider from "./partner/entrySlider";
import initLoopFeedback from "./partner/initLoopFeedback";
import initScrollTrigger from "./partner/scrollTrigger";
import removeMapOnMobile from "./partner/map";

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
  
  initLoopTasks()
  initAdvantagesSlider()
  initPartnerSlider()
  initEntrySlider()
  initLoopFeedback()
  initScrollTrigger()
  removeMapOnMobile()
});

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  setTimeout(() => document.body.classList.add('animatable'), 300);
});
