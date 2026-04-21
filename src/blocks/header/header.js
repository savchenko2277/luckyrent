(() => {

    const header = document.querySelector('.header');
    const burger = header.querySelector('.header__burger');

    const headerItemsList = header.querySelectorAll('.header__item_list');

    headerItemsList.forEach(item => {
        const headerItemsLink = item.querySelector('.header__link');

        headerItemsLink.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    burger.addEventListener('click', () => {
        if(header.classList.contains('is-open')) {
            header.classList.remove('is-open');
            document.body.classList.remove('no-scroll');
        } else {
            header.classList.add('is-open');
            document.body.classList.add('no-scroll');
        }
    });

})();
