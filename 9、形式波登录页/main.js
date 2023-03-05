const label = document.querySelectorAll('label');
label.forEach(ele => {
  let count = -50;
  let text = (ele.getAttribute('data-text')).split('');
  ele.innerHTML = text.map(value => `<span style='transition-delay:${count += 50}ms;'>${value}</span>`).join('')
})