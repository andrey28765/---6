const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');
const totalSlides = 5;
let currentIndex = 0;

// Создаём точки навигации
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 600}px)`;

  // Обновляем активную точку
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = totalSlides - 1;
  if (currentIndex >= totalSlides) currentIndex = 0;
  updateSlider();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Автоматическая прокрутка каждые 4 секунды
setInterval(() => {
  changeSlide(1);
}, 4000);