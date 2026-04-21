import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {

    const cardsSections = document.querySelectorAll('.cards-section');

    cardsSections.forEach(cardsSection => {
        const cardsSwiper = cardsSection.querySelector('.cards-section__swiper');
        const cardsSwiperNext = cardsSection.querySelector('.custom-navigation__btn_next');
        const cardsSwiperPrev = cardsSection.querySelector('.custom-navigation__btn_prev');

        const swiper = new Swiper(cardsSwiper, {
            modules: [Navigation],
            slidesPerView: 4,
            spaceBetween: 16,
            loop: true,
            navigation: {
                nextEl: cardsSwiperNext,
                prevEl: cardsSwiperPrev,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 8,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
            }
        });
    });

})();
