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

const switchs = $$('.switch-btn');
const slider = $('.slider');

for (let i = 0; i < switchs.length; i++) {
    switchs[i].onclick = function (e) {
        const switchActive = $('.switch-btn.active');
        switchActive.classList.remove('active');
        switchs[i].classList.add('active');

        if (switchs[i].classList.contains('monthly')) {
            slider.style.left = '-1px';
        } else {
            slider.style.left = '145px';
        }
    };
}
