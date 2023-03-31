
const video = document.getElementById("music");
video.addEventListener("play", handleFirstPlay(event), false);

let hasPlayed = false;
function handleFirstPlay(event) {
  if (!hasPlayed) {
    hasPlayed = true;

    // Remove listener so this only gets called once.
    const vid = event.target;
    vid.removeEventListener("play", handleFirstPlay(event));

    // Start whatever you need to do after first playback has started
  }
}