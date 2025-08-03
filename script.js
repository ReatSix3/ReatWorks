function toggleSound() {
  const btn = document.getElementById("soundButton");
  const audio = document.getElementById("bgMusic");
  audio.play()
  audio.loop = true;

  if (btn.classList.contains("sound-on")) {
    btn.classList.remove("sound-on");
    btn.classList.add("sound-off");
    audio.volume = 0;
  } else {
    btn.classList.remove("sound-off");
    btn.classList.add("sound-on");
    audio.volume = 0.5;
  }
}
const button = document.getElementById("soundButton");
button.classList.toggle("sound-off");

