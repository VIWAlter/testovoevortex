document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
  });

  document.querySelector('.burger-menu').addEventListener('click', function() {
    
    const navigation = this.closest('.navigation');
    navigation.classList.toggle('active');
    
    
    const isExpanded = navigation.classList.contains('active');
    this.setAttribute('aria-expanded', isExpanded);
  });


  document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      
      document.querySelectorAll('.content-tab').forEach(tab => {
        tab.classList.remove('active');
      });
      
      
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
      
      
      document.querySelectorAll('.tab-link').forEach(item => {
        item.classList.remove('active');
      });
      this.classList.add('active');
    });
  });



const latestButton = document.getElementById('latest');
const popularButton = document.getElementById('popular');
const leftArticles = document.querySelector('.left');
const rightArticles = document.querySelector('.right');


function toggleArticles(activeButton) {
    if (activeButton === 'latest') {
        leftArticles.classList.remove('hidden');
        rightArticles.classList.add('hidden');
        latestButton.classList.add('active');
        popularButton.classList.remove('active');
    } else {
        leftArticles.classList.add('hidden');
        rightArticles.classList.remove('hidden');
        popularButton.classList.add('active');
        latestButton.classList.remove('active');
    }
}


latestButton.addEventListener('click', () => toggleArticles('latest'));
popularButton.addEventListener('click', () => toggleArticles('popular'));


toggleArticles('latest');











document.addEventListener('DOMContentLoaded', function() {
  const inner = document.querySelector('.carousel-inner');
  const indicators = document.querySelectorAll('.indicator');
  let currentIndex = 0;

  // Переключение слайдов по клику на индикатор
  indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
          const slideIndex = parseInt(indicator.getAttribute('data-slide'));
          goToSlide(slideIndex);
      });
  });

  // Переход к конкретному слайду
  function goToSlide(index) {
      currentIndex = index;
      inner.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Обновление активного индикатора
      indicators.forEach((indicator, i) => {
          indicator.classList.toggle('active', i === currentIndex);
      });
  }
});