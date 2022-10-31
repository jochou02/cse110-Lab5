// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.querySelector('textarea');
  const talkButton = document.querySelector('button');
  let voices = [];
  const smileImage = document.querySelector('img');

  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  });

  talkButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

    utterThis.addEventListener('start', () => {
      smileImage.src="assets/images/smiling-open.png";
    })

    utterThis.addEventListener('end', () => {
      smileImage.src="assets/images/smiling.png";
    })
  });

}