const dom = document.querySelectorAll('.showWin');
window.addEventListener('keydown', (event) => {
  dom[0].innerText = event.key;
  dom[1].innerText = event.keyCode;
  dom[2].innerText = event.code;
})