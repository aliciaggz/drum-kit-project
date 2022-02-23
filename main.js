function makeSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  console.log(key);
  if (!audio) return; //stop the function from running if the key doesn't belong to our keys
  audio.currenTime = 0; //rewind the time of the audio
  audio.play();
  key.classList.toggle('playing');
}

window.addEventListener('keydown', makeSound);
