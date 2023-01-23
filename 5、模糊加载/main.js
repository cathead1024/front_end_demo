const span = document.getElementsByTagName('span')[0];
let count = 0;
const timer = setInterval(() => {
  count += 1;
  span.innerText = count + '%';
  if (count === 100) {
    clearInterval(timer);
    timer = null;
  }
}, 30)