
async function loadJSON (url) {
  const res = await fetch(url);
  return await res.json();
}


document.querySelector('.hamburger').onclick = () =>{
    document.querySelector('.lost').style.display='block';

}

const titan = document.querySelector('.titan');
const moon = document.querySelector('.moon');
const mars = document.querySelector('.mars');
const europa = document.querySelector('.europa');






titan.onclick = () =>{
  europa.classList.remove('active1');
  titan.classList.add('active1');
  mars.classList.remove('active1');
  moon.classList.remove('active1');
  loadJSON('data.json').then(data => {
    document.querySelector('.dest-image img').src = data['destinations'][3]['images']['png'];
    document.querySelector('.planet').innerHTML = data['destinations'][3]['name'];
    document.querySelector('.planet-details p').innerHTML = data['destinations'][3]['description'];
    document.querySelector('.avg-dist span').innerHTML = data['destinations'][3]['distance'];
    document.querySelector('.est-time span').innerHTML = data['destinations'][3]['travel'];
  });
}
moon.onclick = () =>{
  europa.classList.remove('active1');
  titan.classList.remove('active1');
  mars.classList.remove('active1');
  moon.classList.add('active1');
  loadJSON('data.json').then(data => {
    document.querySelector('.dest-image img').src = data['destinations'][0]['images']['png'];
    document.querySelector('.planet').innerHTML = data['destinations'][0]['name'];
    document.querySelector('.planet-details p').innerHTML = data['destinations'][0]['description'];
    document.querySelector('.avg-dist span').innerHTML = data['destinations'][0]['distance'];
    document.querySelector('.est-time span').innerHTML = data['destinations'][0]['travel'];
  });
}
mars.onclick = () =>{
  europa.classList.remove('active1');
  titan.classList.remove('active1');
  mars.classList.add('active1');
  moon.classList.remove('active1');
  loadJSON('data.json').then(data => {
    document.querySelector('.dest-image img').src = data['destinations'][1]['images']['png'];
    document.querySelector('.planet').innerHTML = data['destinations'][1]['name'];
    document.querySelector('.planet-details p').innerHTML = data['destinations'][1]['description'];
    document.querySelector('.avg-dist span').innerHTML = data['destinations'][1]['distance'];
    document.querySelector('.est-time span').innerHTML = data['destinations'][1]['travel'];
  });
}
europa.onclick = () =>{
  europa.classList.add('active1');
  titan.classList.remove('active1');
  mars.classList.remove('active1');
  moon.classList.remove('active1');
  loadJSON('data.json').then(data => {
    document.querySelector('.dest-image img').src = data['destinations'][2]['images']['png'];
    document.querySelector('.planet').innerHTML = data['destinations'][2]['name'];
    document.querySelector('.planet-details p').innerHTML = data['destinations'][2]['description'];
    document.querySelector('.avg-dist span').innerHTML = data['destinations'][2]['distance'];
    document.querySelector('.est-time span').innerHTML = data['destinations'][2]['travel'];
  });
}