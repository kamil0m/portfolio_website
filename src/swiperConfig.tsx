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
    clickable: true,
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      let out = ''
      for (let i = 1; i < total+1; i++) {
        if (i == current) {
          out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'"></span>';
        }
        else {
          out = out + '<span class="swiper-pagination-bullet" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'"></span>';
        }
      };
      return out;
    },
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
      slidesPerView: 2.1
    },
    1024: {
      slidesPerView: 3.2
    }
  }
};