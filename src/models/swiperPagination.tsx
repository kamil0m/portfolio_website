export default interface SwiperPagination {
    el: string;
    clickable: boolean;
    type: string;
    renderCustom: (swiper: any, current: number, total: number) => string;
  }