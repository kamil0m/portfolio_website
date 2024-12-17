import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

// Fonction pour générer une pagination personnalisée
// const renderCustomPagination = (current: number, total: number): string => {
//   let output = '';
//   for (let i = 1; i <= total; i++) {
//     if (i === current) {
//       output += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="${i}" role="button" aria-label="Go to slide ${i}"></span>`;
//     } else {
//       output += `<span class="swiper-pagination-bullet" tabindex="${i}" role="button" aria-label="Go to slide ${i}"></span>`;
//     }
//   }
//   return output;
// };


export const swiperConfig: SwiperOptions = {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // Pagination personnalisée
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    // renderCustom: renderCustomPagination, // Utilise la fonction pour personnaliser la pagination
    // renderCustom: (current: number, total: number) => `${current} of ${total}`,// Utilise la fonction pour personnaliser la pagination
    clickable: true, // Permet de cliquer sur les bullets
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

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