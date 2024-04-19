import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
  
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function menu() {
    const btn = document.querySelector('.page-header__burger');

    const menu = document.querySelector('.page-header__menu');

    if (!btn || !menu) return;

    let menuOpen = false;

    const openMenu = () => {
        if (menuOpen) return;
        document.body.classList.add('mobile-menu-open');
        disableBodyScroll(menu);
        menuOpen = true;
    };
    const closeMenu = () => {
        if (!menuOpen) return;
        document.body.classList.remove('mobile-menu-open');
        clearAllBodyScrollLocks();
        menuOpen = false;
    };

    window.openMenu = openMenu;
    window.closeMenu = closeMenu;

    btn.addEventListener('click', event => {
        event.preventDefault();
        if (!menuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    if (!window.matchMedia('(max-width: 640px)').matches) return;

    const elements = Array.from(document.querySelectorAll('.page-header__nav-link--has-dropdown'));
    const SPEED = 0.7;
    console.log('Elements', elements);
    const openAccordion = element => {
        gsap.to(element, {
            height: 'auto',
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh()
        });
    };
    const closeAccordion = element => {
        gsap.to(element, {
            height: 0,
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh()
        });
    };

    elements.forEach(element => {
        const btn = element.querySelector('.page-header__nav-link-inner');
        const content = element.querySelector('.page-header__nav-link-dropdown');

        btn.addEventListener('click', event => {
            event.preventDefault();

            if (element.hasAttribute('data-close-other')) {
                elements.forEach(otherElement => {
                    if (otherElement !== element) {
                        if (otherElement.classList.contains('active')) {
                            const content = otherElement.querySelector('.page-header__nav-link-dropdown');
                            closeAccordion(content);
                            otherElement.classList.remove('active');
                        }
                    }
                });
            }

            if (element.classList.contains('active')) {
                closeAccordion(content);
            } else {
                openAccordion(content);
            }
            element.classList.toggle('active');
        });
    });
}
