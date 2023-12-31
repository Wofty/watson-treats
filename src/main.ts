import './style.css';

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('themeToggleButton');
    const htmlElement = document.documentElement;

    // Initialize theme based on local storage or system preference
    initializeTheme();

    themeToggleButton?.addEventListener('click', function () {
        const isDarkMode = htmlElement.classList.toggle('dark');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    function initializeTheme() {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;

        if (storedTheme) {
            htmlElement.classList.toggle('dark', storedTheme === 'dark');
        } else {
            htmlElement.classList.toggle('dark', prefersDark);
            localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
        }
    }
});
