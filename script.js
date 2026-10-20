alert("Welcome!!");
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
});
// Typing Animation

const typingElement = document.getElementById("typing");

const words = [
    "CSE Student",
    "Future Developer",
    "Tech Enthusiast",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let delay = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        delay = 1200;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

if (typingElement) {
    typeEffect();
}
// Scroll Reveal Animation

const revealSections = document.querySelectorAll(
    ".about, .skills, .projects"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealSections.forEach((section) => {
    revealObserver.observe(section);
});