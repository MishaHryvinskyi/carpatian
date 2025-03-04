import { gallerySwiper } from "./JS/swiper";
import { openModal, closeModal, onEscPress, onBackDropClick } from "./JS/modal";

const optnBtn = document.querySelector('.hero-btn-js');
const backdrop = document.querySelector('.backdrop-hero');
const closeBtn = document.querySelector('.close-js');

optnBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onBackDropClick);