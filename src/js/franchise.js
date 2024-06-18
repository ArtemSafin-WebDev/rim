import initIntroAnimation from "./franchise/introAnimation";
import initOonAnimation from "./franchise/oonAnimation";


document.addEventListener('DOMContentLoaded', function() {

    initIntroAnimation()
    initOonAnimation()
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
});