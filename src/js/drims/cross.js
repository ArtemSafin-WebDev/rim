import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function cross() {
    const cross = [...document.querySelectorAll('.cross')];

    cross.forEach((item) => {
        const firstDiv = item.querySelector('div:first-child');
        const lastDiv = item.querySelector('div:last-child');

        gsap.set([firstDiv, lastDiv], { scaleY:0, duration: 5, ease: 'power4.inOut' });
        
        const tl = gsap.timeline({
            delay: .75,
            scrollTrigger: {
                trigger: item,
                once: true
            }
        })

        tl
          .to(firstDiv, {
              scaleY:1,
              stagger: {each: 0.15 }
          })
          .to(lastDiv, {
              scaleY:1,
              stagger: {each: 0.15 }
          })
    })
}