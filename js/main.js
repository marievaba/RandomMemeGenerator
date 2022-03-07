function generando() {
  const randomNumber = Math.floor(Math.random() * 52);
  log('Generated random number ' + randomNumber);
  let imagePath = 'images/meme_' + randomNumber + '.jpg';
  let loaderElement = document.getElementById('loader');
  if (loaderElement !== null) {
    document.getElementById('loader').remove();
  }
  document.getElementById('meme-img-container').innerHTML = '<img id="meme-img" src="' + imagePath + '"/>';
}

function openGallery() {
  document.getElementById('circle-three').style.zIndex = '3';
  document.getElementById('circle-three').style.transform = 'scale(10)';
  document.getElementById('circle-three').style.transition = 'transform 0.5s';
  setTimeout(function() {
    window.location.href = "/gallery.html";
  }, 1000);
}

function openPrototypes() {
  document.getElementById('circle-one').style.zIndex = '3';
  document.getElementById('circle-one').style.transform = 'scale(18)';
  document.getElementById('circle-one').style.transition = 'transform 0.5s';
  setTimeout(function() {
    window.location.href = "/prototypes.html";
  }, 1000);
}

function openWebsite() {
  document.getElementById('circle-two').style.zIndex = '3';
  document.getElementById('circle-two').style.transform = 'scale(18)';
  document.getElementById('circle-two').style.transition = 'transform 0.5s';
  setTimeout(function() {
    window.location.href = "/meme.html";
  }, 1000);
}

function log(message) {
  console.log('INFO LOG: ' + message);
}