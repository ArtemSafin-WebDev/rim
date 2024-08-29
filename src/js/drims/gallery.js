import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function initGallery() {
    const gallery = document.querySelector('.gallery');

    if(!gallery) return;

    const container = gallery.querySelector('.js-gallery-images');
    const images = [...container.getElementsByTagName('img')];

    gsap.set(images, { y: 50, opacity: 0 })

    images.forEach((image, index) => {
        gsap.to(image, {
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            delay: (index + 1) * 0.1,
            scrollTrigger: {
                trigger: image,
                scrub: true,
                once: true
            }
        })
    })
}
