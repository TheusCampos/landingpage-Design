/**
 * Navigation Logic
 * Gerencia a abertura e fechamento do menu de navegação full-screen.
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuCloseBtn = document.querySelector('.menu-close');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (!menuBtn || !menuOverlay || !menuCloseBtn) {
        console.warn('Elementos de navegação não encontrados.');
        return;
    }

    const openMenu = () => {
        menuOverlay.classList.add('active');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Previne scroll
    };

    const closeMenu = () => {
        menuOverlay.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restaura scroll
    };

    menuBtn.addEventListener('click', openMenu);
    menuCloseBtn.addEventListener('click', closeMenu);

    // Fechar ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });
});
