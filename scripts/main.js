const mobileNav = document.querySelector('.mobile-nav-button');
const mobileIcon = document.querySelector('.mobile-nav-button__icon')
const mobileNavList = document.querySelector('.mobile-nav-list');



mobileNav.addEventListener('click', function () {
  mobileIcon.classList.toggle('active');
  mobileNavList.classList.toggle('active').style.width = "50%";
  document.body.classList.toggle('no-scroll')
})