document.addEventListener("DOMContentLoaded", function () {
    const parallaxContainer = document.querySelector(".parallax-container");
    const parallaxBackground = document.createElement("div");
    parallaxBackground.classList.add("parallax-background");
    parallaxContainer.appendChild(parallaxBackground);

    const moveBackground = (e) => {
        const offsetX = e.clientX / window.innerWidth - 0.5;
        const offsetY = e.clientY / window.innerHeight - 0.5;

        parallaxBackground.style.transform = `translate(${offsetX * 30}px, ${offsetY * 30}px)`;
    };

    document.addEventListener("mousemove", moveBackground);

        const audioIcon = document.getElementById("audioIcon");
        const backgroundAudio = document.getElementById("backgroundAudio");

        let isMuted = false;

    // Set initial volume (0.5 means 50% volume)
    backgroundAudio.volume = 0.2;

    // Mute audio initially
    backgroundAudio.muted = true;

    audioIcon.addEventListener("click", toggleAudio);

    function toggleAudio() {
        isMuted = !isMuted;

        if (isMuted) {
            audioIcon.src = "/PORTFOLIO/Project1/CommonElements/muted.png";
        } else {
            audioIcon.src = "/PORTFOLIO/Project1/CommonElements/unmuted.png";
        }

        // Toggle the muted state of the audio
        backgroundAudio.muted = isMuted;
    }

    // Ensure audio starts playing on user interaction
    document.addEventListener("click", function () {
        backgroundAudio.play().then(() => {
            // Audio started playing
        }).catch((error) => {
            console.error("Error playing audio:", error);
        });
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".audio-control")) {
            window.location.href = "/PORTFOLIO/Project1/CharPage/2CharPage.html"
        }
    })
});