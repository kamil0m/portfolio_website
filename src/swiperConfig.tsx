import { Navigation, Pagination } from 'swiper/modules';

export const swiperConfig = {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },


  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
};