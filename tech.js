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

 if (screen.width<=1000){
      document.querySelector('.component img').src = './assets/technology/image-launch-vehicle-landscape.jpg'
    }else{
      document.querySelector('.component img').src =  './assets/technology/image-launch-vehicle-portrait.jpg'
    }


one.onclick = () =>{
  one.classList.add('button-active');
  two.classList.remove('button-active');
  three.classList.remove('button-active');
  loadJSON('data.json').then(data => {
    if (screen.width<=1000){
      document.querySelector('.component img').src = data['technology'][0]['images']['landscape'];
    }else{
      document.querySelector('.component img').src = data['technology'][0]['images']['portrait'];
    }
    document.querySelector('.more-info p').innerHTML = data['technology'][0]['description'];
    document.querySelector('.more-info .vehicle').innerHTML = data['technology'][0]['name'];

  });
}
two.onclick = () =>{
  one.classList.remove('button-active');
  two.classList.add('button-active');
  three.classList.remove('button-active');
  loadJSON('data.json').then(data => {
    if (screen.width<=1000){
      document.querySelector('.component img').src = data['technology'][1]['images']['landscape'];
    }else{
      document.querySelector('.component img').src = data['technology'][1]['images']['portrait'];
    }
    document.querySelector('.more-info p').innerHTML = data['technology'][1]['description'];
    document.querySelector('.more-info .vehicle').innerHTML = data['technology'][1]['name'];
  });
}
three.onclick = () =>{
  one.classList.remove('button-active');
  two.classList.remove('button-active');
  three.classList.add('button-active');
  loadJSON('data.json').then(data => {
    if (screen.width<=1000){
      document.querySelector('.component img').src = data['technology'][2]['images']['landscape'];
    }else{
      document.querySelector('.component img').src = data['technology'][2]['images']['portrait'];
    }
    document.querySelector('.more-info p').innerHTML = data['technology'][2]['description'];
    document.querySelector('.more-info .vehicle').innerHTML = data['technology'][2]['name'];
  });
}