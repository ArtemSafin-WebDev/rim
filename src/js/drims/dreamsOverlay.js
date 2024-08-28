import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DrawSVGPlugin from '../helpers/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function initDreamsOverlayAnimation() {
    const caseSection = document.querySelector('.dreams-case');

    if (!caseSection) return;

    const overlay = caseSection.querySelector('.js-dream-case-svg');
    const overlayPath = [...overlay.getElementsByTagName('path')];

    const title = caseSection.querySelector('.js-dream-case-title');

    gsap.set(title, { x: -10, opacity: 0 })

    gsap.set(overlayPath, {
        drawSVG: 0
    });

    overlayPath.forEach((item, index) => {
        gsap.to(item, {
            drawSVG: '100%',
            duration: .75,
            delay:  ((index + 1) * 0.25),
            scrollTrigger: {
                trigger: overlay,
                start: 'top 70%'
            }
        });
    });

    gsap.to(title, { 
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: caseSection,
            start: 'top 60%',
        }
    })
}
