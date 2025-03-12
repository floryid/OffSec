document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    const nav = document.querySelector('nav');
    const body = document.body;

    function closeMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        nav.classList.remove('menu-active');
        body.classList.remove('menu-active');
        document.documentElement.style.overflow = '';
    }

    function toggleMenu() {
        const isMenuActive = navMenu.classList.contains('active');
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        nav.classList.toggle('menu-active');
        body.classList.toggle('menu-active');
        document.documentElement.style.overflow = isMenuActive ? '' : 'hidden';
    }

    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Prevent menu from closing when clicking inside
    if (navMenu) {
        navMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function() {
        if (navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu when pressing escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu when window is resized beyond mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});