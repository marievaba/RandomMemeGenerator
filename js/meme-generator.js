function generando() {
  const randomNumber = Math.floor(Math.random() * 52);
  console.log(randomNumber);
  let imagePath = 'images/meme_' + randomNumber + '.jpg';
  document.getElementById('loader').style.display = 'none';
  document.getElementById('meme-img').innerHTML = '<img id="img" src="' + imagePath + '"/>';
}

function highlightEmoticon(sliderValue) {
  console.log(sliderValue);
  if (sliderValue < 33) {
    document.getElementById("first").style.color = "white";
    document.getElementById("second").style.color = "black";
    document.getElementById("third").style.color = "black";
  }
  if (sliderValue > 33 && sliderValue < 66) {
    document.getElementById("first").style.color = 'black';
    document.getElementById("second").style.color = "white";
    document.getElementById("third").style.color = "black";
  }
  if (sliderValue > 66) {
    document.getElementById("first").style.color = "black";
    document.getElementById("second").style.color = "black";
    document.getElementById("third").style.color = "white";
  }
  document.getElementById("button").disabled = false;
}