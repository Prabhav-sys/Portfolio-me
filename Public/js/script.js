// Toggle mobile menu
function toggleMobileMenu() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
}

// Dark mode toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Scroll progress bar
window.onscroll = () => {
    const progressBar = document.querySelector('.progress-bar');
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollPosition / documentHeight) * 100;
    progressBar.style.width = `${progress}%`;
};
