!function(){new Swiper(".mySwiper",{loop:!0,navigation:{nextEl:".gallery__button-next",prevEl:".gallery__button-prev"},spaceBetween:20,breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1.1},768:{slidesPerView:2},1440:{slidesPerView:2}},keyboard:{enabled:!0},autoplay:{delay:5e3},speed:1e3}),new Swiper(".upcomingSwiper",{loop:!0,navigation:{nextEl:".gallery__button-next",prevEl:".gallery__button-prev"},spaceBetween:20,breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:3}},keyboard:{enabled:!0},autoplay:{delay:5e3},speed:1e3});var e=document.querySelector(".backdrop-hero");function n(){document.body.style.overflow="",window.removeEventListener("keydown",t),e.classList.add("is-hidden")}function t(e){"Escape"===e.code&&n()}var r=document.querySelector(".hero-btn-js"),o=document.querySelector(".backdrop-hero"),i=document.querySelector(".close-js");r.addEventListener("click",(function(){document.body.style.overflow="hidden",window.addEventListener("keydown",t),e.classList.remove("is-hidden")})),i.addEventListener("click",n),o.addEventListener("click",(function(e){e.target===e.currentTarget&&n()}))}();
//# sourceMappingURL=index.ad064133.js.map
