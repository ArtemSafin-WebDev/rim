import initIntroAnimation from "./franchise/introAnimation";


document.addEventListener('DOMContentLoaded', function() {

    initIntroAnimation()
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
});