const nav = document.querySelector('nav');
const content = document.querySelector('.container')
const menu = document.querySelector('menu')
nav.addEventListener('click', () => {
  if (nav.classList.contains('rotate_90')) {
    nav.classList.remove('rotate_90');
    content.classList.remove('rotate_20');
    menu.classList.remove('menuActive');
  } else {
    nav.classList.add('rotate_90');
    content.classList.add('rotate_20');
    menu.classList.add('menuActive');
  }
});