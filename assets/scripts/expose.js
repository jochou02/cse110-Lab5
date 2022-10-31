// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const menu = document.getElementById('horn-select');
  const image = document.querySelector('img');
  const sound = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const volume = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img')
  const jsConfetti = new JSConfetti();
  let confetti = false;

  menu.addEventListener('change', (event) => {
    let Selectedoption = event.target.value;
    if (Selectedoption == "air-horn") {
      image.src="assets/images/air-horn.svg";
      sound.src="assets/audio/air-horn.mp3";
      confetti = false;
    }
    else if (Selectedoption == "car-horn") {
      image.src="assets/images/car-horn.svg";
      sound.src="assets/audio/car-horn.mp3";
      confetti = false;
    }
    else {
      image.src="assets/images/party-horn.svg";
      sound.src="assets/audio/party-horn.mp3";
      confetti = true;
    }
  });

  volume.addEventListener('input', (event) => {
    let numericVolume = event.target.value;
    if (numericVolume == 0)
      volumeIcon.src="assets/icons/volume-level-0.svg";
    else if (numericVolume < 33) 
      volumeIcon.src="assets/icons/volume-level-1.svg";
    else if (numericVolume < 67) 
      volumeIcon.src="assets/icons/volume-level-2.svg";
    else
      volumeIcon.src="assets/icons/volume-level-3.svg";
    sound.volume = numericVolume / 100;
  });

  playButton.addEventListener('click', () => {
    sound.play();
    if (confetti)
      jsConfetti.addConfetti();
  });

}