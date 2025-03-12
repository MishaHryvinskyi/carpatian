new Swiper(".mySwiper",{loop:!0,navigation:{nextEl:".gallery__button-next",prevEl:".gallery__button-prev"},spaceBetween:20,breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1.1},768:{slidesPerView:2},1440:{slidesPerView:2}},keyboard:{enabled:!0},autoplay:{delay:5e3},speed:1e3}),new Swiper(".upcomingSwiper",{loop:!1,navigation:{nextEl:".gallery__button-next",prevEl:".gallery__button-prev"},spaceBetween:20,breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:3}},keyboard:{enabled:!0},autoplay:{delay:5e3},speed:1e3});const i={btnOpenMeny:document.querySelector(".menu"),optnBtn:document.querySelector(".hero-btn-js"),backdrop:document.querySelector(".backdrop-hero"),closeBtn:document.querySelector(".close-js"),hoverlaOpen:document.querySelector(".open-hoverla-js"),bukovelOpen:document.querySelector(".open-bukovel-js"),carpatiansOpen:document.querySelector(".open-carpatian-js"),upcomingClose:document.querySelector(".upcoming-btn-close-js"),backdropUpcoming:document.querySelector(".upcoming-backdrop"),heroDescr:document.querySelector(".hero__description"),heroTitle:document.querySelector(".hero__title"),mobileMeny:document.querySelector(".mobile-menu"),disabledBtn:document.querySelector(".primari-btn"),logo:document.querySelector(".logo")},{heroDescr:l,heroTitle:e,mobileMeny:n,disabledBtn:a,logo:s}=i;function o(){n.classList.remove("open"),s.style.marginLeft="0",a.classList.remove("btn-disabled"),e.classList.remove("btn-disabled"),l.classList.remove("btn-disabled")}const c=document.querySelector(".backdrop-hero"),m=document.querySelector(".upcoming-backdrop"),t=document.getElementById("upcoming");function d(i){document.body.style.overflow="hidden",window.addEventListener("keydown",_),m.classList.remove("is-hidden");const l=t.querySelector(".modal-content");l&&l.remove();let e="";i.target.classList.contains("open-hoverla-js")?e='\n    <div class="swiper modalSwiper">\n        <div class="swiper-wrapper">\n            <div class="swiper-slide hoverla-modal day-1">\n                <h3 class="upcoming-modal__title">Ascent to Hoverla</h3>\n                <p class="upcoming-modal__day">1 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Departure from Lviv</li>\n                    <li class="upcoming-modal__item">Manyava Hermitage</li>\n                    <li class="upcoming-modal__item">Manyava waterfall</li>\n                    <li class="upcoming-modal__item">Arrival to Bukovel</li>\n                    <li class="upcoming-modal__item">Check-in</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                    <li class="upcoming-modal__item">Evening by the fireplace</li>\n                </ul>\n            </div>\n            <div class="swiper-slide hoverla-modal day-2">\n                <h3 class="upcoming-modal__title">Ascent to Hoverla</h3>\n                <p class="upcoming-modal__day">2 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Breakfast</li>\n                    <li class="upcoming-modal__item">Ascent to Hoverla</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                    <li class="upcoming-modal__item">Reacretion</li>\n                    <li class="upcoming-modal__item">Sauna</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                </ul>\n            </div>\n                <div class="swiper-slide hoverla-modal day-3">\n                    <h3 class="upcoming-modal__title">Ascent to Hoverla</h3>\n                    <p class="upcoming-modal__day">3 day</p>\n                    <ul class="upcoming-modal__list">\n                        <li class="upcoming-modal__item">Breakfast</li>\n                        <li class="upcoming-modal__item">A walk around Bukovel</li>\n                        <li class="upcoming-modal__item">Check out from the hotel</li>\n                        <li class="upcoming-modal__item">Yaremche</li>\n                        <li class="upcoming-modal__item">Arrival in Lviv</li>\n                    </ul>\n            </div>\n        </div>\n    <div class="swiper-pagination"></div>\n    </div>\n    <div class="upcoming-modal__panel">\n        <p class="upcoming-modal__panel-price">From UAH 4,499/person</p>\n        <button class="hero-btn-js primari-btn hero-btn-js">BOOK A TOUR</button>\n    </div>\n    ':i.target.classList.contains("open-bukovel-js")?e='\n    <div class="swiper modalSwiper">\n        <div class="swiper-wrapper">\n            <div class="swiper-slide hoverla-modal bukovel-1">\n                <h3 class="upcoming-modal__title">Ski tour to Bukovel</h3>\n                <p class="upcoming-modal__day">1 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Departure from Lviv</li>\n                    <li class="upcoming-modal__item">Manyava Hermitage</li>\n                    <li class="upcoming-modal__item">Manyava waterfall</li>\n                    <li class="upcoming-modal__item">Arrival to Bukovel</li>\n                    <li class="upcoming-modal__item">Check-in</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                    <li class="upcoming-modal__item">Evening by the fireplace</li>\n                </ul>\n            </div>\n                 <div class="swiper-slide hoverla-modal bukovel-2">\n                <h3 class="upcoming-modal__title">Ski tour to Bukovel</h3>\n                <p class="upcoming-modal__day">2 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Breakfast</li>\n                    <li class="upcoming-modal__item">Recreation</li>\n                    <li class="upcoming-modal__item">Lunch</li>\n                    <li class="upcoming-modal__item">Reacretion</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                    <li class="upcoming-modal__item">Vacation</li>\n                </ul>\n            </div>\n            <div class="swiper-slide hoverla-modal bukovel-3">\n                <h3 class="upcoming-modal__title">Ski tour to Bukovel</h3>\n                <p class="upcoming-modal__day">3 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Breakfast</li>\n                    <li class="upcoming-modal__item">A walk around Bukovel</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                    <li class="upcoming-modal__item">Recreation</li>\n                    <li class="upcoming-modal__item">Sauna</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                </ul>\n            </div>\n            <div class="swiper-slide hoverla-modal bukovel-4">\n                <h3 class="upcoming-modal__title">Ski tour to Bukovel</h3>\n                <p class="upcoming-modal__day">4 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Breakfast</li>\n                    <li class="upcoming-modal__item">Recreation</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                    <li class="upcoming-modal__item">Departure from Bukovel</li>\n                    <li class="upcoming-modal__item">Arrival in Lviv</li>\n                </ul>\n            </div>\n        </div>\n    <div class="swiper-pagination"></div>\n    </div>\n    <div class="upcoming-modal__panel">\n        <p class="upcoming-modal__panel-price">UAH 7,499/person</p>\n        <button class="hero-btn-js primari-btn hero-btn-js">BOOK A TOUR</button>\n    </div>\n    ':i.target.classList.contains("open-carpatian-js")&&(console.log("message"),e='\n    <div class="swiper modalSwiper">\n        <div class="swiper-wrapper">\n            <div class="swiper-slide hoverla-modal carpatians-1">\n                <h3 class="upcoming-modal__title">Week in Carpathians</h3>\n                <p class="upcoming-modal__day">1 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Departure from Lviv</li>\n                    <li class="upcoming-modal__item">Dovbush rocks</li>\n                    <li class="upcoming-modal__item">Lunch</li>\n                    <li class="upcoming-modal__item">Tustan fortress</li>\n                    <li class="upcoming-modal__item">Check-in</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                </ul>\n            </div>\n                 <div class="swiper-slide hoverla-modal carpatians-2">\n                <h3 class="upcoming-modal__title">Week in Carpathians</h3>\n                <p class="upcoming-modal__day">2 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Breakfast</li>\n                    <li class="upcoming-modal__item">Lake Synevyr</li>\n                    <li class="upcoming-modal__item">Ecopark “Valley of Wolves”</li>\n                    <li class="upcoming-modal__item">Lunch</li>\n                    <li class="upcoming-modal__item">Excursion to Kolochava</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                </ul>\n            </div>\n            <div class="swiper-slide hoverla-modal carpatians-3">\n                <h3 class="upcoming-modal__title">Week in Carpathians</h3>\n                <p class="upcoming-modal__day">3 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Breakfast</li>\n                    <li class="upcoming-modal__item">Shipit waterfall</li>\n                    <li class="upcoming-modal__item">Gimba mountain</li>\n                    <li class="upcoming-modal__item">Recreation</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                </ul>\n            </div>\n            <div class="swiper-slide hoverla-modal carpatians-4">\n                <h3 class="upcoming-modal__title">Week in Carpathians</h3>\n                <p class="upcoming-modal__day">4 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Breakfast</li>\n                    <li class="upcoming-modal__item">Deer farm in Iza</li>\n                    <li class="upcoming-modal__item">Warm waters in Velyatino</li>\n                    <li class="upcoming-modal__item">Geographical center of Europe</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                </ul>\n            </div>\n            <div class="swiper-slide hoverla-modal carpatians-5">\n                <h3 class="upcoming-modal__title">Week in Carpathians</h3>\n                <p class="upcoming-modal__day">5 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Breakfast</li>\n                    <li class="upcoming-modal__item">Ascent to Hoverla</li>\n                    <li class="upcoming-modal__item">Reacreation</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                </ul>\n            </div>\n            <div class="swiper-slide hoverla-modal carpatians-6">\n                <h3 class="upcoming-modal__title">Week in Carpathians</h3>\n                <p class="upcoming-modal__day">6 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Breakfast</li>\n                    <li class="upcoming-modal__item">Hut-museum from the "Shadows of Forgotten Ancestors"</li>\n                    <li class="upcoming-modal__item">Lunch</li>\n                    <li class="upcoming-modal__item">Rafting of free time</li>\n                    <li class="upcoming-modal__item">Dinner</li>\n                </ul>\n            </div>\n            <div class="swiper-slide hoverla-modal carpatians-7">\n                <h3 class="upcoming-modal__title">Week in Carpathians</h3>\n                <p class="upcoming-modal__day">7 day</p>\n                <ul class="upcoming-modal__list">\n                    <li class="upcoming-modal__item">Breakfast</li>\n                    <li class="upcoming-modal__item">Dovbush trail</li>\n                    <li class="upcoming-modal__item">Souvenir fair</li>\n                    <li class="upcoming-modal__item">Lunch</li>\n                    <li class="upcoming-modal__item">Probij waterfall</li>\n                    <li class="upcoming-modal__item">Return to Lviv</li>\n                </ul>\n            </div>\n        </div>\n    <div class="swiper-pagination"></div>\n    </div>\n    <div class="upcoming-modal__panel">\n        <p class="upcoming-modal__panel-price">UAH 9,999/person</p>\n        <button class="hero-btn-js primari-btn hero-btn-js">BOOK A TOUR</button>\n    </div>\n    '),e&&t.insertAdjacentHTML("beforeend",`<div class="modal-content">${e}</div>`);new Swiper(".modalSwiper",{loop:!1,spaceBetween:20,slidesPerView:1,breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}},keyboard:{enabled:!0},autoplay:{delay:1e4,pauseOnMouseEnter:!0},speed:1e3,pagination:{el:".swiper-pagination",clickable:!0}})}function r(){document.body.style.overflow="",window.removeEventListener("keydown",_),m.classList.add("is-hidden")}function p(){document.body.style.overflow="",window.removeEventListener("keydown",_),c.classList.add("is-hidden")}function u(i){i.target===i.currentTarget&&(p()||r())}function _(i){"Escape"===i.code&&(p()||r())}const{optnBtn:g,closeBtn:v,backdrop:h,hoverlaOpen:y,bukovelOpen:w,carpatiansOpen:b,upcomingClose:k,backdropUpcoming:f,btnOpenMeny:L}=i;g.addEventListener("click",(function(){document.body.style.overflow="hidden",window.addEventListener("keydown",_),c.classList.remove("is-hidden")})),v.addEventListener("click",p),h.addEventListener("click",u),y.addEventListener("click",d),w.addEventListener("click",d),b.addEventListener("click",d),k.addEventListener("click",r),f.addEventListener("click",u),L.addEventListener("click",(function(){window.innerWidth>=1440?o():(n.classList.toggle("open"),function(){const i=window.innerWidth,o=n.classList.contains("open");s.style.marginLeft=i>=768&&i<=1439&&o?"64px":"0";o?(a.classList.add("btn-disabled"),e.classList.add("btn-disabled"),l.classList.add("btn-disabled")):(a.classList.remove("btn-disabled"),e.classList.remove("btn-disabled"),l.classList.remove("btn-disabled"))}())})),window.addEventListener("resize",(()=>{window.innerWidth>=1440&&o()})),document.querySelectorAll(".header-nav__item a").forEach((i=>{i.addEventListener("click",(()=>{o()}))}));
//# sourceMappingURL=index.2beb86cf.js.map
