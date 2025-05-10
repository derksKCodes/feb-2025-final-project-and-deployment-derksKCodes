document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    function toggleMobileMenu() {
        mobileMenu.classList.toggle("active");
    }

    hamburgerBtn.addEventListener("click", toggleMobileMenu);
    closeMenuBtn.addEventListener("click", toggleMobileMenu);
    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", toggleMobileMenu);
    });

    document.addEventListener('click', (event) => {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(event.target) && 
            event.target !== hamburgerBtn) {
            toggleMobileMenu();
        }
    });

    // Highlight active nav link
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});