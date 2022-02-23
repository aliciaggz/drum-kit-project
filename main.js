function makeSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  console.log(audio);

  if (!audio) return; //stop the function from running if the key doesn't belong to our keys
  audio.play();
}

window.addEventListener('keydown', makeSound);
