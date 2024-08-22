import gsap from "gsap"

export default function intro() {
    const introShape = document.querySelector('.js-drims-intro-shape');

    const tl = gsap.set(introShape, { y: 0, opacity: 1 });

    gsap.to(introShape, {
        y: '-100%',
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
    })
}