import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function nostalgia() {
    const nostalgiaSection = document.querySelector('.dreams-nostalgia');

    if(!nostalgiaSection) return;

    const mainText = nostalgiaSection.querySelector('.js-dreams-text-animation--main');
    const mainTextToLeft = [...nostalgiaSection.querySelectorAll('.js-dreams-text-animation--to-left')];
    const mainTextToRight = [...nostalgiaSection.querySelectorAll('.js-dreams-text-animation--to-right')];

    gsap.set(mainTextToLeft, { x: 35 })
    gsap.set(mainTextToRight, { x: -35})

    gsap.to(mainText, {
        scaleX: 1,
        duration: 1.25,
        ease: 'power4.out',
        delay: .3,
        scrollTrigger: {
            trigger: nostalgiaSection,
            start: 'top 40%'
        },
        onStart: function() {
            mainTextToRight.forEach((item, index) => {
                gsap.to(item, {
                    x: 0,
                    opacity: 1,
                    delay: (index + 1) * .15
                })
            })   
        },
        onUpdate: function() {
            mainTextToLeft.forEach((item, index) => {
                gsap.to(item, {
                    x: 0,
                    opacity: 1,
                    delay: (index + 1) * .4
                })
            })      
        }
    })
}