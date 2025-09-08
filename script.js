document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  // Initial display
  showSlide(currentSlide);

  // Hamburger Menu Functionality
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const mainNav = document.getElementById('main-nav');

  hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('open');
    mainNav.classList.toggle('open');
  });

  // Add navigation buttons
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';
  nextBtn.classList.add('carousel-next-btn'); // Add class for styling
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
  carouselContainer.appendChild(nextBtn);

  const prevBtn = document.createElement('button');
  prevBtn.textContent = 'Prev';
  prevBtn.classList.add('carousel-prev-btn'); // Add class for styling
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
  carouselContainer.appendChild(prevBtn);
});