// Dynamic year in footer

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// Simple scroll effect

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log(`Navigating to ${link.textContent}`);
    });
});


// Page load message

window.addEventListener("load", () => {
    console.log("Portfolio loaded successfully 🚀");
});
