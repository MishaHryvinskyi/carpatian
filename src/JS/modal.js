import { markupHoverla, markupBukovel, markupCarpatians } from "./markup";

const backdrop = document.querySelector('.backdrop-hero');
const backdropUpcoming = document.querySelector('.upcoming-backdrop');

const upcomingContainer = document.getElementById('upcoming');


export function openModal () {
    document.body.style.overflow = "hidden"
    window.addEventListener('keydown', onEscPress);
    backdrop.classList.remove('is-hidden');
}

export function openUpcomingModal (e) {
    document.body.style.overflow = "hidden"
    window.addEventListener('keydown', onEscPress);
    backdropUpcoming.classList.remove('is-hidden');

    const dynamicContent = upcomingContainer.querySelector('.modal-content');
    if (dynamicContent) {
        dynamicContent.remove();
    }

    let markup = '';

    if (e.target.classList.contains('open-hoverla-js')) {
        markup = markupHoverla();
    } else if (e.target.classList.contains('open-bukovel-js')) {
        markup = markupBukovel();
    } else if (e.target.classList.contains('open-carpatian-js')) {
        console.log('message')
        markup = markupCarpatians();
    }

    if (markup) {
        upcomingContainer.insertAdjacentHTML('beforeend', `<div class="modal-content">${markup}</div>`);
    } 

    const modalSwiper = new Swiper(".modalSwiper", {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
          320: { slidesPerView: 1 },
          375: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1440: { slidesPerView: 1 },
        },
        keyboard: { enabled: true },
        autoplay: {
          delay: 10000,
          pauseOnMouseEnter: true,
        },
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

export function closeUpcomingModal () {
    document.body.style.overflow = ""
    window.removeEventListener('keydown', onEscPress);
    backdropUpcoming.classList.add('is-hidden');
}

export function closeModal () {
    document.body.style.overflow = ""
    window.removeEventListener('keydown', onEscPress);
    backdrop.classList.add('is-hidden');
}

export function onBackDropClick(e) {
    if(e.target === e.currentTarget) {
        closeModal() || closeUpcomingModal();
    }
}

export function onEscPress(e) {
    const ESC_KEY_CODE = 'Escape';
    if(e.code === ESC_KEY_CODE) {
        closeModal() || closeUpcomingModal();
    };
}