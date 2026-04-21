(() => {
    const faq = document.querySelector('.faq');
    if (!faq) return;

    const faqItems = faq.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const head = item.querySelector('.faq__item-title');

        head.addEventListener('click', () => {
            faqItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
})();