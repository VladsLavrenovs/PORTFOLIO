const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("active");
    })
    this.classList.add("active")
}


document.addEventListener("DOMContentLoaded", function () {
    const playerMenuItems = document.querySelectorAll('.list');

    playerMenuItems.forEach(item => {
        item.addEventListener('click', function () {
            const playerTextContainer = document.getElementById('playerTextContainer');
            const playerImageContainer = document.getElementById('playerImageContainer');
            const playerName = item.querySelector('.text').textContent;
            const playerFileName = playerName.toLowerCase().replace(/\s/g, ''); // Convert name to lowercase and remove spaces

            // Fetch and update text content
            fetch(`../Players/${playerFileName}.txt`)
                .then(response => response.text())
                .then(textContent => {
                    playerTextContainer.textContent = textContent;
                })
                .catch(error => console.error('Error fetching text content:', error));

            // Update player image
            const playerImageSrc = item.querySelector('.icon img').src;
            const playerImage = document.createElement('img');
            playerImage.src = playerImageSrc;
            playerImageContainer.innerHTML = ''; // Clear previous content
            playerImageContainer.appendChild(playerImage);
        });
    });
});
