import { gallerySwiper } from "./JS/swiper";
import { menuOpen, closeMenu } from "./JS/mobile-menu";
import { openModal, closeModal, onBackDropClick, closeUpcomingModal, openUpcomingModal } from "./JS/modal";
import { refs } from "./JS/refs";
const { optnBtn, closeBtn, backdrop, hoverlaOpen, bukovelOpen, carpatiansOpen, upcomingClose, backdropUpcoming, btnOpenMeny} = refs;
// modal-hero
optnBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onBackDropClick);
// modal-upcoming
hoverlaOpen.addEventListener('click', openUpcomingModal);
bukovelOpen.addEventListener('click', openUpcomingModal);
carpatiansOpen.addEventListener('click', openUpcomingModal);
upcomingClose.addEventListener('click', closeUpcomingModal);
backdropUpcoming.addEventListener('click', onBackDropClick);
// mobile-menu
btnOpenMeny.addEventListener('click', menuOpen);

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1440) {
        closeMenu();
    }
});

document.querySelectorAll('.header-nav__item a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});