import horizontalLoop from '../helpers/horizontalLoop';
import gsap from 'gsap';

export default function loopAnimation() {
    const loopItem = document?.querySelector('.js-loop');

    if (!loopItem) return;

    const speed = Number(loopItem?.dataset?.speed) ?? 1;

    const loopClientsLine = loopItem?.children ?? [];

    if (!loopClientsLine) return;

    horizontalLoop(loopClientsLine, {
        repeat: -1,
        speed: speed,
        paddingRight: parseFloat(gsap.getProperty(loopClientsLine[0], 'marginRight', 'px'))
    });
}
