// --- 1. Theme Toggle (Dark/Light Mode) ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const iconSpan = themeToggleBtn.querySelector('.icon');

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    body.classList.add('light-mode');
    iconSpan.textContent = '🌙'; 
} else {
    iconSpan.textContent = '☀️'; 
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        iconSpan.textContent = '🌙'; 
    } else {
        localStorage.setItem('theme', 'dark');
        iconSpan.textContent = '☀️'; 
    }
});

// --- 2. Typewriter Effect ---
const textElement = document.getElementById('typing-text');
const phrases = ["AI & ML Engineer", "GenAI Specialist", "Backend Developer", "Problem Solver"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; 
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; 
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; 
        typeSpeed = 500; 
    }

    setTimeout(typeWriter, typeSpeed);
}

document.addEventListener('DOMContentLoaded', typeWriter);

// --- 3. Scroll Progress Bar ---
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// --- 4. Spotlight Effect for Glass Cards ---
// This listens for mouse movement on every card and updates CSS variables
const cards = document.querySelectorAll(".glass-card");

cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        // 1. Get the rectangle of the card
        const rect = card.getBoundingClientRect();

        // 2. Calculate mouse position relative to the card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 3. Set CSS variables on the card so the gradient moves
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });
});