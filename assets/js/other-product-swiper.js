var swiper = new Swiper(".other-product-swiper", {
  slidesPerView: 4,
  spaceBetween: 50,
  slidesPerGroup: 4,
  // loop: true,
  // loopFillGroupWithBlank: true,
  pagination: {
  // el: ".swiper-pagination",
  clickable: true,
  },
  navigation: {
  nextEl: ".other-product__next",
  prevEl: ".other-product__prev",
  },

  breakpoints: {
    1025: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 4,
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