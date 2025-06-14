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
  freeMode: true, // Свободное перемещение
});

// const swiper2 = new Swiper('.swiper2', {
//   loop: true,
//   slidesPerView: 6.5,
//   spaceBetween: 45,
//   freeMode: true,
// });

const swiper2 = new Swiper('.swiper2', {
  loop: true,
  slidesPerView: 6.5,
  spaceBetween: 45,
  freeMode: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false, // Важно: false для полного контроля
  },
  speed: 10000,
  grabCursor: true,
  on: {
    init: function () {
      this.wrapperEl.style.transitionTimingFunction = 'linear';
    },
    touchStart: function () {
      this.autoplay.stop(); // Мгновенная остановка
      this.params.autoplay.disableOnInteraction = true; // Навсегда отключаем авторестарт
    },
  },
});
