
function playMusic() {

    const body = document.body;
    const audio = document.getElementById("myaudio");
    
    body.addEventListener("mouseover", () => {
        audio.play();
    });
};
