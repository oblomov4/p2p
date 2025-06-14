const pPortfolio = document.querySelectorAll('.portfolio-box-img-container-p');

pPortfolio.forEach((elem) => {
  const img = document.createElement('img');
  img.src = 'images/arrow-right-white.svg';
  img.alt = 'Иконка';
  img.className = 'dynamic-icon';

  elem.innerHTML += '&nbsp;&nbsp;&nbsp;';
  elem.appendChild(img);
});

const swiper1 = new Swiper('.swiper1', {
  loop: true,
  slidesPerView: 4.2,
  loop: false,
  spaceBetween: 35,
  freeMode: true,

  breakpoints: {
    1440: {
      slidesPerView: 4.2,
    },
    1100: {
      slidesPerView: 3.2,
    },
    800: {
      slidesPerView: 2.2,
    },
    600: {
      slidesPerView: 1.5,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

const swiper2 = new Swiper('.swiper2', {
  loop: true,
  slidesPerView: 6.5,
  spaceBetween: 45,
  freeMode: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 10000,
  grabCursor: true,
  on: {
    init: function () {
      this.wrapperEl.style.transitionTimingFunction = 'linear';
    },
    touchStart: function () {
      this.autoplay.stop();
      this.params.autoplay.disableOnInteraction = true;
    },
  },

  breakpoints: {
    1600: {
      slidesPerView: 6.5,
    },
    1200: {
      slidesPerView: 5,
    },
    800: {
      slidesPerView: 3.3,
    },
    400: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

const aLinkInsideNav = document.querySelectorAll('.nav__list-li > a');
const logo = document.querySelector('.nav__logo-link');
const order = document.querySelector('.nav__right');

logo.onclick = () => nav.classList.contains('active') && nav.classList.remove('active');
order.onclick = () => nav.classList.contains('active') && nav.classList.remove('active');
aLinkInsideNav.forEach(
  (elem) =>
    (elem.onclick = () => nav.classList.contains('active') && nav.classList.remove('active')),
);

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  nav.classList.add('active');
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && e.target !== burger) {
    nav.classList.remove('active');
  }
});

nav.addEventListener('click', (e) => {
  e.stopPropagation();
});

// const boxImgTeam = document.querySelectorAll('.our-team__box');
// boxImgTeam.forEach((elem) => (elem.onclick = () => elem.classList.toggle('hover-effect')));

// const swiperBox = document.querySelectorAll('.about__swiper-box');

// swiperBox.forEach((elem) => (elem.onclick = () => elem.classList.toggle('hover-effect')));

// const portfolioBox = document.querySelectorAll('.portfolio-box-img-container');

// portfolioBox.forEach((elem) => (elem.onclick = () => elem.classList.toggle('hover-effect')));

// Более точное определение мобильных устройств и планшетов
const isMobileOrTablet = () => {
  // 1. Проверяем User Agent
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

  // 2. Проверяем наличие touch-событий и размер экрана
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth < 1024; // Планшеты обычно до 1024px

  return (isMobileUA || hasTouch) && isSmallScreen;
};

// Функция для добавления обработчиков
const addTouchClickHandlers = () => {
  // Обработчики для .our-team__box
  const boxImgTeam = document.querySelectorAll('.our-team__box');
  boxImgTeam.forEach((elem) => {
    elem.addEventListener('click', () => {
      boxImgTeam.forEach((item) => item.classList.remove('hover-effect'));
      elem.classList.toggle('hover-effect');
    });
  });

  // Обработчики для .about__swiper-box
  const swiperBox = document.querySelectorAll('.about__swiper-box');
  swiperBox.forEach((elem) => {
    elem.addEventListener('click', () => {
      swiperBox.forEach((item) => item.classList.remove('hover-effect'));
      elem.classList.toggle('hover-effect');
    });
  });

  const portfolioBox = document.querySelectorAll('.portfolio-box-img-container');
  portfolioBox.forEach((elem) => {
    elem.addEventListener('click', () => {
      portfolioBox.forEach((item) => item.classList.remove('hover-effect'));
      elem.classList.toggle('hover-effect');
    });
  });
};

// Инициализация только для мобильных и планшетов
if (isMobileOrTablet()) {
  addTouchClickHandlers();
}
