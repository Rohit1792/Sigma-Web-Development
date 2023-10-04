const body = document.body;
const audio = document.getElementById("myaudio");

body.addEventListener("mouseenter", () => {
    audio.play();
})

body.addEventListener("mouseleave", () => {
    audio.play();
})