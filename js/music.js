document.body.addEventListener('click', function() {
    var audioController = document.getElementById("music-controller");
    // if (audioController != null) {
    //     audioController.pause();
    // }
    if (audioController && !audioController.contains(event.target)) {
        audioController.pause();
    }
});