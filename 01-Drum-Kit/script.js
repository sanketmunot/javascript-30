function getKeyInput(e) {
  let element = document.querySelector(`[data-key="${e.keyCode}"]`);

  if (!element) return;

  let audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  element.classList.add("playing");
  audioElement.currentTime = 0;
  audioElement.play();
}

function setKeyBackToNormal(e) {
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".item");

keys.forEach((key) =>
  key.addEventListener("transitionend", setKeyBackToNormal)
);
window.addEventListener("keydown", getKeyInput);
