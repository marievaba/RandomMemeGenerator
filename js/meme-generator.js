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

function highlightEmoticon(sliderValue) {
  if (sliderValue < 33) {
    document.getElementById('first').style.color = 'white';
    document.getElementById('second').style.color = 'black';
    document.getElementById('third').style.color = 'black';
    log('Feelings state set to "sad", slider value = ' + sliderValue);
  }
  if (sliderValue > 33 && sliderValue < 66) {
    document.getElementById('first').style.color = 'black';
    document.getElementById('second').style.color = 'white';
    document.getElementById('third').style.color = 'black';
    log('Feelings state set to "meh", slider value = ' + sliderValue);
  }
  if (sliderValue > 66) {
    document.getElementById('first').style.color = 'black';
    document.getElementById('second').style.color = 'black';
    document.getElementById('third').style.color = 'white';
    log('Feelings state set to "happy", slider value = ' + sliderValue);
  }
  document.getElementById('button').disabled = false;
}

function log(message) {
  console.log('INFO LOG: ' + message);
}