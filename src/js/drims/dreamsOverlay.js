import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DrawSVGPlugin from '../helpers/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function initDreamsOverlayAnimation() {
    const overlay = document.querySelector('.js-dream-case-svg');

    if (!overlay) return;

    const overlayPath = [...overlay.getElementsByTagName('path')];

    gsap.set(overlayPath, {
        drawSVG: 0
    });

    overlayPath.forEach((item, index) => {
        gsap.to(item, {
            drawSVG: '100%',
            duration: 2.5,
            delay: 1 * ((index + 1) * 0.25),
            scrollTrigger: {
                trigger: overlay,
                start: 'top 20%'
            }
        });
    });
}
