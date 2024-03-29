import { lockScroll, unlockScroll } from "./scrollBlocker";

export default function modals() {
    let activeModal = null;

    function openModal(id) {
        if (activeModal) {
            closeModal(activeModal);
        }

        const modal = document.querySelector(id);
        console.log('Opening modal', modal);
        if (modal) {
            if (typeof window.closeMenu === 'function') {
                window.closeMenu();
            }
            lockScroll(modal);
            modal.classList.add('active');
            document.body.classList.add('modal-open');
            activeModal = modal;
        } else {
            console.error(`Modal with ID: ${id} not found`);
        }
    }

    function closeModal(modal) {
        unlockScroll();
        modal.classList.remove('active');
        activeModal = null;
        document.body.classList.remove('modal-open');
        const closeModalEvent = new CustomEvent('closemodal');
        document.dispatchEvent(closeModalEvent);
    }

    window.openModal = openModal;

    window.closeModal = closeModal;

    document.addEventListener('click', event => {
        if (event.target.matches('.js-open-modal') || event.target.closest('.js-open-modal')) {
            event.preventDefault();
            if (typeof window.closeMenu === 'function') {
                window.closeMenu();
            }
            const link = event.target.matches('.js-open-modal') ? event.target : event.target.closest('.js-open-modal');
            const hash = link.hash;
            openModal(hash);
        } else if (event.target.matches('.js-close-modal') || event.target.closest('.js-close-modal')) {
            event.preventDefault();
            const modalToClose = event.target.closest('.js-modal');
            closeModal(modalToClose);
        } else if (event.target.matches('.js-modal')) {
            event.preventDefault();
            const modalToClose = event.target;
            closeModal(modalToClose);
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.which === 27 && activeModal) {
            closeModal(activeModal);
        }
    });
}
