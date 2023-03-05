const domList = document.querySelectorAll('.box');
const scrollHandel = function () {
  let windowHeight = window.innerHeight / 5 * 4;
  domList.forEach(box => {
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < windowHeight) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}
scrollHandel();
window.addEventListener('scroll', scrollHandel);
