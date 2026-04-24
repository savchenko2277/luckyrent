import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

(() => {

    const card = document.querySelector('.card');
    if (!card) return;

    const secondSwiper = new Swiper('.card__photo-mini', {
        modules: [Thumbs],
        slidesPerView: 4,
        spaceBetween: 8,
        watchSlidesProgress: true,
    });

    const mainSwiper = new Swiper('.card__photo', {
        modules: [Thumbs, Navigation],
        spaceBetween: 16,
        loop: true,
        navigation: {
            nextEl: '.card__photo-navigation .custom-navigation__btn_next',
            prevEl: '.card__photo-navigation .custom-navigation__btn_prev',
        },

        thumbs: {
            swiper: secondSwiper,
        }
    });

})();