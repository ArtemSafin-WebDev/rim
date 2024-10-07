import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function cross() {
    const cross = [...document.querySelectorAll('.cross')];

    cross.forEach((item, index) => {
        const firstDiv = item.querySelector('div:first-child');
        const lastDiv = item.querySelector('div:last-child');

        gsap.set([firstDiv, lastDiv], { scaleY:0, duration: 5, ease: 'power4.inOut' });
        
        const tl = gsap.timeline({
            delay: (index + 1) * .25,
            scrollTrigger: {
                trigger: item,
                once: true
            }
        })

        tl
          .to(firstDiv, {
              scaleY:1,
          })
          .to(lastDiv, {
              scaleY:1,
          })
    })
}