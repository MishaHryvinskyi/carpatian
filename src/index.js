import { gallerySwiper } from "./JS/swiper";
import { openModal, closeModal, onBackDropClick, openUpcomingModal, closeUpcomingModal } from "./JS/modal";

const optnBtn = document.querySelector('.hero-btn-js');
const backdrop = document.querySelector('.backdrop-hero');
const closeBtn = document.querySelector('.close-js');

const hoverlaOpen = document.querySelector('.open-hoverla-js');
const bukovelOpen = document.querySelector('.open-bukovel-js');
const carpatiansOpen = document.querySelector('.open-carpatian-js');
const upcomingClose = document.querySelector('.upcoming-btn-close-js');
const backdropUpcoming = document.querySelector('.upcoming-backdrop');


const heroDescr = document.querySelector('.hero__description')
const heroTitle = document.querySelector('.hero__title');
const mobileMeny = document.querySelector('.mobile-menu');
const btnOpenMeny = document.querySelector('.menu');
const disabledBtn = document.querySelector('.primari-btn');

btnOpenMeny.addEventListener('click', menuOpen)

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


function menuOpen() {
    mobileMeny.classList.toggle('open');
    disabledBtn.classList.toggle('btn-disabled');
    heroTitle.classList.toggle('btn-disabled');
    heroDescr.classList.toggle('btn-disabled');
}
