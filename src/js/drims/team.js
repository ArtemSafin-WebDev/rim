import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function team() {
    const teamSection = document.querySelector('.dreams-team');

    if (!teamSection) return;

    let teamCards = (teamCards = [...teamSection.querySelector('.js-team-card-animation').children]);
    if (window.matchMedia('(min-width: 1024px)').matches) {
        teamCards = teamCards.reverse();
    }

    const teamBalloon = teamSection.querySelector('.dreams-team__image-balloon');

    gsap.set(teamCards, { opacity: 0, y: 20 });

    teamCards.forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            delay: (index + 1) * 0.25,
            scrollTrigger: {
                trigger: teamSection,
                start: 'top 45%'
            }
        });
    });

    const tl = gsap.timeline({ paused: false, yoyo: true, repeat: -1 });
    tl.to(teamBalloon, { duration: 4, y: 20, ease: 'sine.inOut' }, 0);
}
