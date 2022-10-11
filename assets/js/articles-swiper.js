var swiper = new Swiper(".articles-swiper-container", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  // loop: true,
  // loopFillGroupWithBlank: true,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  navigation: {
  nextEl: ".articles-swiper-button-next",
  prevEl: ".articles-swiper-button-prev",
  },

  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
  },

  //    453: {
  //      slidesPerView: 2,
  //      spaceBetween: 34,
  //      slidesPerGroup: 2,
  //  },

   577: {
    slidesPerView: 2,
    spaceBetween: 34,
    slidesPerGroup: 2,
},
  1: {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
  }
},

});