document.addEventListener('DOMContentLoaded', () => {
    const popups = Array.from(document.querySelectorAll('.telegram-popup'));
    popups.forEach(popup => {
        const openBtn = popup.querySelector('.telegram-popup__btn');
        const closeBtn = popup.querySelector('.telegram-popup__close');
        const subscribeBtn = popup.querySelector('.telegram-popup__subscribe');

        openBtn.addEventListener('click', event => {
            event.preventDefault();
            popup.classList.add('open');
        });
        closeBtn.addEventListener('click', event => {
            event.preventDefault();
            popup.classList.remove('open');
        });

        subscribeBtn.addEventListener('click', event => {
            popup.classList.remove('open');
        });
    });
});
