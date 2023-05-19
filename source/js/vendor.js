// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';
let swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // slidesPerView: 4,
  // spaceBetween: 40,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 10,
      centeredSlides: true,
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    //   centeredSlides: false,
    // },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


let mySwiper = new Swiper('.feedback-swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: false,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // slidesPerView: 4,
  // spaceBetween: 40,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 10,
      centeredSlides: false,
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    //   centeredSlides: false,
    // },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});