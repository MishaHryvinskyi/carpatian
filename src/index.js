import { gallerySwiper } from "./JS/swiper";

const optnBtn = document.querySelector('.hero-btn-js');
const backdrop = document.querySelector('.backdrop-hero');
const closeBtn = document.querySelector('.close-js');

optnBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onBackDropClick)

function openModal () {
    document.body.style.overflow = "hidden"
    window.addEventListener('keydown', onEscPress);
    backdrop.classList.remove('is-hidden');
}

function closeModal () {
    document.body.style.overflow = ""
    window.removeEventListener('keydown', onEscPress);
    backdrop.classList.add('is-hidden');
}

function onBackDropClick(e) {
    if(e.target === e.currentTarget) {
        closeModal();
    }
}

function onEscPress(e) {
    const ESC_KEY_CODE = 'Escape';
    if(e.code === ESC_KEY_CODE) {
        closeModal()
    };
}