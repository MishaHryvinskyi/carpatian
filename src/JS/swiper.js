export const gallerySwiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".gallery__button-next",
      prevEl: ".gallery__button-prev",
    },
    spaceBetween: 20,
    breakpoints: {
      320: { slidesPerView: 1 },
      375: { slidesPerView: 1.1 },
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 2 },
    },
    keyboard: { enabled: true },
    autoplay: { delay: 5000 },
    speed: 1000,
  });