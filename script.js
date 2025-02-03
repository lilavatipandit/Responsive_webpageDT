function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    const toggleOpen = document.getElementById("toggleOpen");
    const toggleBtn = sidebar.querySelector(".toggle-btn");

    // Toggle visibility of the sidebar and main content
    sidebar.classList.toggle("hidden");
    mainContent.classList.toggle("full");

    // Toggle the button direction and visibility
    if (sidebar.classList.contains("hidden")) {
        toggleBtn.innerHTML = "▶";
        toggleOpen.style.display = "block";  // Show the open button
    } else {
        toggleBtn.innerHTML = "◀";
        toggleOpen.style.display = "none";  // Hide the open button
    }
}
function validateInput(button) {
    const card = button.closest(".card");
    const inputs = card.querySelectorAll(".input-field");
    let isValid = true;

    // Check if all input fields are filled
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            alert("Please fill in the description.");
            isValid = false;
        }
    });

    if (isValid) {
        alert("Successfully Submitted");
    }
}
