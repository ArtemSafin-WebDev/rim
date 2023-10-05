import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const headerSliders = Array.from(document.querySelectorAll('.new-header__dropdown-slider'));

    headerSliders.forEach(item => {
        const container = item.querySelector('.swiper');
        const swiper = new Swiper(container, {
            slidesPerView: 'auto',
            speed: 600,
            pagination: {
                el: item.querySelector('.new-header__dropdown-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
    console.log('Header menu');

    const menuListItems = Array.from(document.querySelectorAll('.new-header__nav-list-item'));

    console.log('Menu items', menuListItems);

    menuListItems.forEach(item => {
        const hasDropdown = !!item.querySelector('.new-header__dropdown');
        if (!hasDropdown) return;
        const link = item.querySelector('.new-header__nav-link');
        link.addEventListener('click', event => {
            event.preventDefault();
            const isMobile = window.matchMedia('(max-width: 800px)').matches;
            if (isMobile) event.preventDefault();
            menuListItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    const burger = document.querySelector('.new-header__burger');

    burger?.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('menu-open');
    });
});
