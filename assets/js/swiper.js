const UpossibilitiesSwiper = new Swiper(".u-possibilities-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".u-possibilities-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 60,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 136,
    },
  },
});

const UAddSoundSwiper = new Swiper(".u-add-sound-swiper", {
  slidesPerView: 3.9,
  spaceBetween: 136,
  centeredSlides: true,
  slideToClickedSlide: true,

  breakpoints: {
       320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },

    600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1270: {
      slidesPerView: 3.9,
      spaceBetween: 136,
    },
  },
});
