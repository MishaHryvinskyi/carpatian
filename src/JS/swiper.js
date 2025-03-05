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


  export const upcomingSwiper = new Swiper(".upcomingSwiper", {
    loop: false,
    navigation: {
      nextEl: ".gallery__button-next",
      prevEl: ".gallery__button-prev",
    },
    spaceBetween: 20,
    breakpoints: {
      320: { slidesPerView: 1 },
      375: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 3 },
    },
    keyboard: { enabled: true },
    autoplay: { delay: 5000 },
    speed: 1000,
  });

  export const modalSwiper = new Swiper(".modalSwiper", {
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