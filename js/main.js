const pPortfolio = document.querySelectorAll('.portfolio-box-img-container-p');

pPortfolio.forEach((elem) => {
  const img = document.createElement('img');
  img.src = 'images/arrow-right-white.svg'; // Путь к изображению
  img.alt = 'Иконка';
  img.className = 'dynamic-icon'; // Класс для стилей

  // Добавляем пробелы и картинку после текста
  elem.innerHTML += '&nbsp;&nbsp;&nbsp;'; // Неразрывные пробелы
  elem.appendChild(img);
});
