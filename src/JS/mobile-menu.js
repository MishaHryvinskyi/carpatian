import { refs } from "./refs";
const { heroDescr, heroTitle, mobileMeny, disabledBtn, logo, btnMenu } = refs;

export function menuOpen() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1440) {
        closeMenu();
        return;
    }

    btnMenu.classList.toggle('toggle');
    mobileMeny.classList.toggle('open');
    updateMenuState();
}

export function updateMenuState() {
    const screenWidth = window.innerWidth;
    const isOpen = mobileMeny.classList.contains('open');

    if (screenWidth >= 768 && screenWidth <= 1439) {
        logo.style.marginLeft = isOpen ? '64px' : '0';
    } else {
        logo.style.marginLeft = '0';
    }

    if (isOpen) {
        disabledBtn.classList.add('btn-disabled');
        heroTitle.classList.add('btn-disabled');
        heroDescr.classList.add('btn-disabled');
    } else {
        disabledBtn.classList.remove('btn-disabled');
        heroTitle.classList.remove('btn-disabled');
        heroDescr.classList.remove('btn-disabled');
    }
}

export function closeMenu() {
    btnMenu.classList.remove('toggle');
    mobileMeny.classList.remove('open');
    logo.style.marginLeft = '0';
    disabledBtn.classList.remove('btn-disabled');
    heroTitle.classList.remove('btn-disabled');
    heroDescr.classList.remove('btn-disabled');
}

document.addEventListener("DOMContentLoaded", () => {
    closeMenu();
});