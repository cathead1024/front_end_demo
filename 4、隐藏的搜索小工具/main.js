function imgClick() {
  console.log(1);
  const dom = document.querySelector('.search');
  if (dom.classList.contains('active')) {
    dom.classList.remove('active');
  } else {
    dom.classList.add('active');
  }
}