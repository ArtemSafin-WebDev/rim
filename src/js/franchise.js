import initIntroAnimation from "./franchise/introAnimation";
import initOonAnimation from "./franchise/oonAnimation";
import initYourAnimation from "./franchise/yourAnimation";


document.addEventListener('DOMContentLoaded', function() {

    initIntroAnimation()
    initOonAnimation()
    initYourAnimation()
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
});