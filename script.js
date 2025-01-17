// Toggle dark mode on a button click
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});
