var audio = document.getElementById("myAudio");
var playPauseButton = document.getElementById("playPauseButton");

playPauseButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = "Pausar";
  } else {
    audio.pause();
    playPauseButton.innerHTML = "Reproduzir";
  }
});
