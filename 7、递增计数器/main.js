const number = document.querySelectorAll('.number');
const list = [1200, 5000, 7500];
number.forEach(ele => {
  const add = function () {
    let cur = +ele.innerText;
    let countValue = Math.ceil(ele.getAttribute('data-max') / 200);
    if (cur < ele.getAttribute('data-max')) {
      cur += + countValue;
      ele.innerText = Math.ceil(cur);
      setTimeout(add, 1);
    } else {
      ele.innerText = ele.getAttribute('data-max');
    }
  }
  add();
});