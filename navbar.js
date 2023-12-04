// menuToggle.js

let isMenuOpen = false;
let isMobileMenu = false;
let isMobileProductGrid = false;

function toggleMenu() {
    const menu = document.getElementById('menu');
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function toggleMenuMobile() {
    console.log('toggle!')
    const menu = document.getElementById('menu-mobile');
    isMobileMenu = !isMobileMenu;

    if (isMobileMenu) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function toggleMobileProductGrid() {
    const menu = document.getElementById('mobile-product-grid');
    isMobileProductGrid = !isMobileProductGrid;

    if (isMobileProductGrid) {
        menu.style.display = 'grid';
    } else {
        menu.style.display = 'none';
    }
}
