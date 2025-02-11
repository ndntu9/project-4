const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const hero = $$('a[href="#hero"]');

for (let i = 0; i < hero.length; i++) {
    hero[i].onclick = function (e) {
        e.preventDefault();
        document.documentElement.scrollTop = 0;
    };
}

const tabs = $$('.tab-item');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function (e) {
        const activeTab = $('.tab-item.active');
        activeTab.classList.remove('active');
        tabs[i].classList.add('active');

        const idContent = tabs[i].dataset.service;
        const activeContent = $('.pet-service.active');
        activeContent.classList.remove('active');
        const tabContent = $('#' + idContent);
        tabContent.classList.add('active');
    };
}
