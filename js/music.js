document.body.addEventListener('click', function() {
    var audioController = document.getElementById("music-controller");

    if (audioController != null) {
        audioController.pause();
    }
});