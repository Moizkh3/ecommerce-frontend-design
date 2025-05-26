// Graping Icons
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const sidebar = document.getElementById("left-section");

// Add classList To Open Sidebar
menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active");
});

// Remove classList To Close Sidebar
closeIcon.addEventListener("click", () => {
    sidebar.classList.remove("active");

});

// Set the target date for the countdown (e.g., 4 days from now)
const countdownTarget = new Date();
countdownTarget.setDate(countdownTarget.getDate() + 4); // 4 days from now

function updateCountdown() {
    const now = new Date();
    let diff = countdownTarget - now;

    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const countdown = document.querySelector('.countdown');
    if (countdown) {
        const spans = countdown.querySelectorAll('span');
        if (spans.length === 4) {
            spans[0].textContent = String(days).padStart(2, '0');
            spans[1].textContent = String(hours).padStart(2, '0');
            spans[2].textContent = String(minutes).padStart(2, '0');
            spans[3].textContent = String(seconds).padStart(2, '0');
        }
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();