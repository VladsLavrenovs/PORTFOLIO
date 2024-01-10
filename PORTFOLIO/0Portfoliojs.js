document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    let isDropdownOpen = false;

    dropdownButton.addEventListener("click", function () {
        isDropdownOpen = !isDropdownOpen;
        dropdownContent.classList.toggle("show", isDropdownOpen);
    });

    dropdownButton.addEventListener("mouseenter", function () {
        if (!isDropdownOpen) {
            dropdownContent.classList.add("show");
        }
    });

    dropdownButton.addEventListener("mouseleave", function () {
        if (!isDropdownOpen) {
            dropdownContent.classList.remove("show");
        }
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches(".dropbtn")) {
            if (isDropdownOpen) {
                dropdownContent.classList.remove("show");
                isDropdownOpen = false;
            }
        }
    });
    
});