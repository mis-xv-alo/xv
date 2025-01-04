var audio = new Audio('resources/song.mp3');

audio.autoplay = true;
audio.loop = true;
audio.muted = true;

document.body.addEventListener('click', function() {
    audio.muted = false;
    audio.play().catch(function(error) {
        console.error("Error al reproducir el audio: ", error);
    });
});