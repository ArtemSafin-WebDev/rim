import gsap from "gsap";
import DrawSVGPlugin from "../helpers/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)

export default function scale() {
    const scaleSection = document.querySelector('.dreams-scale');

    if(!scaleSection) return;

    const svg = scaleSection.querySelector('.js-dreams-scale-svg');
    const vertical = svg.querySelector('.vertical');
    const horizontals = [...svg.querySelectorAll('.horizontal')];
    const largeHorizontals = [...svg.querySelectorAll('.large-horizontal')];

    const DURATION = 2
    const DELAY = .2
    
    gsap.set(largeHorizontals, { drawSVG:"50% 50%"})
    gsap.set(vertical, { drawSVG: 0, scrollTrigger: { trigger: svg } })
    gsap.set(horizontals, { drawSVG: 0, scaleX: -1, transformOrigin: "center center"})

    gsap.to(vertical, {
        drawSVG: "100%",
        duration: 1,
        scrollTrigger: {
            trigger: svg,
            delay: .75,
            once: true,
            start: "top 40%",
        },
        onUpdate: function() {
            const progress = Math.round(this.progress() * 100);

            if(progress >= 10) {
                gsap.to(largeHorizontals[0], {
                   drawSVG:"100% 0%",
                    duration: DURATION,
                    delay: DELAY
                })
            }

            horizontals.forEach((item, index) => {
               const currentIdx = (index + 1) * 25

               if(progress >= currentIdx) {
                   gsap.to(item, {
                       drawSVG:"100%",
                        duration: DURATION,
                        delay: DELAY,
                   })
               }
            })

            if(progress >= 100) {
                gsap.to(largeHorizontals[1], {
                    drawSVG:"100% 0%",
                    duration: DURATION,
                    delay: DELAY
                })
            }
        }
    })

    const scaleAnimationText = [...scaleSection.querySelector('.js-scale-animation-text').children]

    scaleAnimationText.forEach((item, index) => {
        const title = item.querySelector('.dreams-scale__item-title')
        const text = item.querySelector('.dreams-scale__item-text')
        const star = item.querySelector('.dreams-scale__item-star')

        gsap.set([title, text], { y: 20})
        gsap.set(star, { opacity: 0, rotate: -90, scale: 0})

        gsap.to([title, text], {
            y: 0,
            opacity: 1,
            delay: (index + 1) * .35,
            scrollTrigger: {
                trigger: scaleSection,
                start: 'top 70%'
            },
            onStart: function() {
                gsap.to(star, {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1.125,
                    ease: 'power4.out'
                })
            }
        })
    })
}