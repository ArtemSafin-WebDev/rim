import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function event() {
    const dreamsEvents = document.querySelector('.dreams-events');

    if (!dreamsEvents) return;

    const blockText = dreamsEvents.querySelectorAll('.js-event-text-block');
    const blockTextInline = dreamsEvents.querySelectorAll('.js-event-text-block-inline');

    blockText.forEach(async (item, index) => {
        const title = item.querySelector('.dreams-events__title');
        const subtitle = item.querySelector('.dreams-events__subtitle');
        const glassEffect = item.querySelector('.dreams-events__glass-effect');

        gsap.set(title, { y: 40, opacity: 0 });
        gsap.set(subtitle, { y: -15, opacity: 0 });

        gsap.to(title, {
            y: 0,
            delay: (index + 1) * 0.5,
            opacity: 1,
            scrollTrigger: {
                trigger: dreamsEvents,
                start: 'top 70%'
            }
        });

        gsap.to(subtitle, {
            y: 0,
            delay: (index + 1) * 0.75,
            opacity: 1,
            scrollTrigger: {
                trigger: dreamsEvents,
                start: 'top 70%'
            }
        });

        gsap.to(glassEffect, {
            delay: (index + 1) * 0.95,
            opacity: 1,
            scaleX: 1,
            left: 0,
            scrollTrigger: {
                trigger: dreamsEvents,
                start: 'top 70%'
            }
        });
    });

    blockTextInline.forEach((item, index) => {
        const title = item.querySelector('.dreams-events__title');
        const subtitle = item.querySelector('.dreams-events__subtitle');
        const glassEffect = item.querySelector('.dreams-events__glass-effect');

        gsap.set(title, { y: 40, opacity: 0 });
        gsap.set(subtitle, { x: -15, opacity: 0 });

        gsap.to(title, {
            y: 0,
            delay: (index + 1) * 0.6,
            opacity: 1,
            scrollTrigger: {
                trigger: dreamsEvents,
                start: 'top 70%'
            }
        });

        gsap.to(subtitle, {
            x: 0,
            delay: (index + 1) * 0.75,
            opacity: 1,
            scrollTrigger: {
                trigger: dreamsEvents,
                start: 'top 70%'
            }
        });

        gsap.to(glassEffect, {
            delay: (index + 1) * 0.75,
            opacity: 1,
            scaleX: 1,
            left: 0,
            scrollTrigger: {
                trigger: dreamsEvents,
                start: 'top 70%'
            }
        });
    });
}
