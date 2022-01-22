async function loadJSON (url) {
  const res = await fetch(url);
  return await res.json();
}

document.querySelector('.hamburger').onclick = () =>{
    document.querySelector('.lost').style.display='block';

}

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');

loadJSON('data.json').then(data=>{
  console.table(data['crew']);
})

one.onclick = () =>{
  one.classList.add('dot-active');
  two.classList.remove('dot-active');
  three.classList.remove('dot-active');
  four.classList.remove('dot-active');
  loadJSON('data.json').then(data => {
    document.querySelector('.crew-image img').src = data['crew'][0]['images']['png'];
    document.querySelector('.crew-personal-info .pos').innerHTML = data['crew'][0]['role'];
    document.querySelector('.about p').innerHTML = data['crew'][0]['bio'];
    document.querySelector('.crew-personal-info .name').innerHTML = data['crew'][0]['name'];

  });
}
two.onclick = () =>{
  two.classList.add('dot-active');
  one.classList.remove('dot-active');
  three.classList.remove('dot-active');
  four.classList.remove('dot-active');
  loadJSON('data.json').then(data => {
    document.querySelector('.crew-image img').src = data['crew'][1]['images']['png'];
    document.querySelector('.crew-personal-info .pos').innerHTML = data['crew'][1]['role'];
    document.querySelector('.about p').innerHTML = data['crew'][1]['bio'];
    document.querySelector('.crew-personal-info .name').innerHTML = data['crew'][1]['name'];
  });
}
three.onclick = () =>{
  two.classList.remove('dot-active');
  one.classList.remove('dot-active');
  three.classList.add('dot-active');
  four.classList.remove('dot-active');
  loadJSON('data.json').then(data => {
    document.querySelector('.crew-image img').src = data['crew'][2]['images']['png'];
    document.querySelector('.crew-personal-info .pos').innerHTML = data['crew'][2]['role'];
    document.querySelector('.about p').innerHTML = data['crew'][2]['bio'];
    document.querySelector('.crew-personal-info .name').innerHTML = data['crew'][2]['name'];
  });
}
four.onclick = () =>{
  two.classList.remove('dot-active');
  one.classList.remove('dot-active');
  three.classList.remove('dot-active');
  four.classList.add('dot-active');
  loadJSON('data.json').then(data => {
    document.querySelector('.crew-image img').src = data['crew'][3]['images']['png'];
    document.querySelector('.crew-personal-info .pos').innerHTML = data['crew'][3]['role'];
    document.querySelector('.about p').innerHTML = data['crew'][3]['bio'];
    document.querySelector('.crew-personal-info .name').innerHTML = data['crew'][3]['name'];
  });
}