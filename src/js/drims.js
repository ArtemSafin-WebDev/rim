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

import intro from './drims/intro';
import cross from './drims/cross';
import scale from './drims/scale';

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

  cross();
  intro();
  scale();
});

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  setTimeout(() => document.body.classList.add('animatable'), 300);
});
