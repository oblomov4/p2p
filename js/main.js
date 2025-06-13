const pPortfolio = document.querySelectorAll('.portfolio-box-img-container-p');

pPortfolio.forEach((elem) => {
  const img = document.createElement('img');
  img.src = 'images/arrow-right-white.svg';
  img.alt = 'Иконка';
  img.className = 'dynamic-icon';

  elem.innerHTML += '&nbsp;&nbsp;&nbsp;';
  elem.appendChild(img);
});

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4.2,
  loop: false,
  spaceBetween: 35,
  freeMode: true, // Свободное перемещение
});
