document.addEventListener('DOMContentLoaded', () => {
    console.log('Header menu');

    const menuListItems = Array.from(document.querySelectorAll('.page-header__nav-list-item'));

    menuListItems.forEach(item => {
        const hasDropdown = !!item.querySelector('.page-header__nav-dropdown');
        if (!hasDropdown) return;
        const link = item.querySelector('.page-header__nav-link');
        link.addEventListener('click', event => {
            const isMobile = window.matchMedia('(max-width: 640px)').matches;
            if (isMobile) event.preventDefault();
            menuListItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    const burger = document.querySelector('.page-header__burger');

    burger?.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('menu-open');
    });
});
