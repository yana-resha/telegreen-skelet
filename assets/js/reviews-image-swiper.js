var swiper = new Swiper(".reviews-swiper-container", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 1,
  // loop: true,
  // loopFillGroupWithBlank: true,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  navigation: {
  nextEl: ".reviews-swiper-button-next",
  prevEl: ".reviews-swiper-button-prev",
  },

  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 1,
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 1,
  },

  //    453: {
  //      slidesPerView: 2,
  //      spaceBetween: 34,
  //      slidesPerGroup: 2,
  //  },

   577: {
    slidesPerView: 2,
    spaceBetween: 34,
    slidesPerGroup: 1,
},
  1: {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
  }
},

});