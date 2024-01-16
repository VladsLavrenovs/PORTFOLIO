const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("active");
    })
    this.classList.add("active")
}

list.forEach((item) => item.addEventListener("click", activeLink))


document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.navigation');
    const textContainer = document.querySelector('.text-container');
    const contentArea = document.querySelector('.content-area');

    menu.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            const characterFile = event.target.closest('.list').querySelector('.text').textContent.toLowerCase() + '.txt';
            const characterImage = event.target.getAttribute('src');

            // Fetch the text content from the file
            fetch('../Players/' + characterFile)
                .then(response => response.text())
                .then(data => {
                    // Update the text content in the text container
                    textContainer.innerHTML = data;

                    // Change the background image of the content area
                    contentArea.style.backgroundImage = `url('../Players/${characterImage}')`;



                    // Trigger the appearAnimation by adding a class
                    textContainer.classList.add('appear-animation');
                    // Remove the class after the animation duration to allow re-triggering
                    setTimeout(() => {
                        textContainer.classList.remove('appear-animation');
                    }, 2000); // Set this timeout to match the duration of your appearAnimation
                })
                .catch(error => console.error('Error fetching text content:', error));
        }
    });
});
