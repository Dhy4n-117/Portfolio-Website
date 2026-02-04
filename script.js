// JavaScript for Theme Toggle (Dark/Light Mode)

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const iconSpan = themeToggleBtn.querySelector('.icon');

// 1. Check Local Storage on page load
// This ensures the website remembers your choice if you refresh
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    body.classList.add('light-mode');
    iconSpan.textContent = '🌙'; // Set moon icon for light mode
} else {
    iconSpan.textContent = '☀️'; // Set sun icon for default dark mode
}

// 2. Add Click Event Listener
themeToggleBtn.addEventListener('click', () => {
    // Toggle the class on the body
    body.classList.toggle('light-mode');

    // Check if light mode is active to update icon and storage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        iconSpan.textContent = '🌙'; // Switch to Moon
    } else {
        localStorage.setItem('theme', 'dark');
        iconSpan.textContent = '☀️'; // Switch to Sun
    }
});
