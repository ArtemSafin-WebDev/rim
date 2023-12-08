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
// #NOTE: dev-azat
import loopTape from "./redtag/loopTape";
import inventoryAnimation from "./redtag/inventory";
import loopClients from "./redtag/loopClients";
import headerAnimation from "./redtag/redtagHeader";
import marketLoopAnimation from "./redtag/marketLoop";
import redTagTapeLoop from "./redtag/redTagTapeLoop";
import meetPersonSkills from "./redtag/meetPersonSkills";
import redtagCasesSlider from "./redtag/redtagCasesSlider";
import redtagPlaceLoop from "./redtag/redtagPLaceLoop";
import redtagBoardsAnimation from "./redtag/redtagBoardsAnimation";
import redtagIntro from "./redtag/redtagIntro";
import inventorySlider from "./redtag/inventorySlider";
import geographyMapAnimation from "./redtag/geographyMapAnimation";
import marketImagesParallax from "./redtag/marketImagesParallax";
import redtagIntroAnimation from "./redtag/redtagIntroAnimation";
import removeRedtagMapMobile from "./redtag/removeRedtagMapMobile";
import anchorNavigation from "./redtag/anchorNavigation";
import redtagLines from "./redtag/redtagLines";
import autoLoadingImages from "./redtag/autoLoadingImages";

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
  // #NOTE: dev-azat
  loopTape()
  inventoryAnimation()
  loopClients()
  headerAnimation()
  marketLoopAnimation()
  redTagTapeLoop()
  meetPersonSkills()
  redtagCasesSlider()
  redtagPlaceLoop()
  redtagBoardsAnimation()
  redtagIntro()
  inventorySlider()
  geographyMapAnimation()
  marketImagesParallax()
  redtagIntroAnimation()
  removeRedtagMapMobile()
  anchorNavigation()
  redtagLines()
  autoLoadingImages()
});

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  setTimeout(() => document.body.classList.add('animatable'), 300);
});
