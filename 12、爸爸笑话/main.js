const button = document.querySelector('button');
const section = document.querySelector('section');
button.addEventListener('click', getData);
getData();
async function getData() {
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    }
  });
  const data = await res.json();
  section.innerText = data.joke;
}