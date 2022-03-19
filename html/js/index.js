let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

let market = document.querySelector('.navbar');
document.querySelector('#market-btn').onclick = () => {
  market.classList.toggle('active');
};

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
});


