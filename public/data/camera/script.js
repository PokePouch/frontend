document.addEventListener("DOMContentLoaded", () => {
    const webcamVideo = document.getElementById("webcamVideo");

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment"} })
        .then((stream) => {
            webcamVideo.srcObject = stream;
        })
        .catch((error) => {
            console.error("Kamera konnte nicht geöffnet werden:", error);
        });
});