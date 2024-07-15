import initIntroAnimation from "./franchise/introAnimation";
import initOonAnimation from "./franchise/oonAnimation";
import initYourAnimation from "./franchise/yourAnimation";
import initWhatIsAnimationAnimation from "./franchise/whatIsAnimation";
import initDemandAnimation from "./franchise/demandAnimation";
import initPackedAnimation from "./franchise/packedAnimation";
import initRespAnimation from "./franchise/respAnimation";
import initFormatsAnimation from "./franchise/formatsAnimation";
import initPauchalAnimation from "./franchise/pauchalAnimation";
import initInstallationAnimation from "./franchise/installationAnimation";
import initControlAnimation from "./franchise/controlAnimation";
import initHasQuestionsAnimation from "./franchise/hasQuestionsAnimation";
import initQaAnimation from "./franchise/qaAnimation";
import initGeographyAnimation from "./franchise/geographyAnimation";
import initGrowthAnimation from "./franchise/growthAnimation";


document.addEventListener('DOMContentLoaded', function() {

    initIntroAnimation()
    initOonAnimation()
    initYourAnimation()
    initWhatIsAnimationAnimation()
    initDemandAnimation()
    initPackedAnimation()
    initRespAnimation()
    initFormatsAnimation()
    initPauchalAnimation()
    initInstallationAnimation()
    initControlAnimation()
    initHasQuestionsAnimation()
    initQaAnimation()
    initGeographyAnimation()
    initGrowthAnimation()
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
});