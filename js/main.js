var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1, 
  spaceBetween: 30,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
  },
})

const burger = document.getElementById('burger');
const header = document.querySelector('.header');
const cross = document.querySelectorAll('.line')

function openMenu() {
  header.classList.toggle('is-open');
  for(i = 0; i < cross.length; i++) {
    cross[i].classList.toggle('cross-item');
  }
}

burger.addEventListener('click', openMenu);