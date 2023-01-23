let cur = 0;
let li_list = document.querySelectorAll('li');
const line = document.querySelector('.lineActive');
// next 事件
function next() {
  if (cur >= li_list.length - 1) return;
  cur += 1;
  li_list[cur].classList.add('active');
  line_show();
  btn_status();
}
// prev 事件
function prev() {
  if (cur <= 0) return;
  li_list[cur].classList.remove('active');
  cur -= 1;
  line_show();
  btn_status();
}
// 进度条事件
function line_show() {
  let percent = (100 / (li_list.length - 1)).toFixed(0)
  line.setAttribute('style', 'transform:translateX(-' + (100 - cur * percent) + '%)')
}
// 按钮状态
function btn_status() {
  let btn = document.querySelectorAll('button');
  if (cur === 0) {
    btn[0].classList.contains('activeBtn') && btn[0].classList.remove('activeBtn');
  } else if (cur === li_list.length - 1) {
    btn[1].classList.contains('activeBtn') && btn[1].classList.remove('activeBtn');
  } else {
    btn.forEach(btn => { btn.classList.add('activeBtn') });
  }
}