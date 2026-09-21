/**
 * Navigation Menu Mobile (Hamburger Drawer) - COHABITAT.CC
 * Gestion accessible de l'ouverture, de la fermeture et du focus
 */
(() => {
  const toggleBtn = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  const backdrop = document.getElementById('navbar-backdrop');
  const mainContent = document.querySelector('main');
  const footerContent = document.querySelector('footer');

  if (!toggleBtn || !navbarMenu) return;

  let isOpen = false;

  const openMenu = () => {
    isOpen = true;
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', 'Fermer le menu de navigation');
    
    navbarMenu.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    document.body.classList.add('menu-open');

    // Accessibilité : neutraliser le reste de la page
    if (mainContent) mainContent.inert = true;
    if (footerContent) footerContent.inert = true;
  };

  const closeMenu = (restoreFocus = false) => {
    if (!isOpen) return;
    isOpen = false;
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Ouvrir le menu de navigation');
    
    navbarMenu.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    document.body.classList.remove('menu-open');

    // Rétablir l'accessibilité du contenu
    if (mainContent) mainContent.inert = false;
    if (footerContent) footerContent.inert = false;

    if (restoreFocus) {
      toggleBtn.focus();
    }
  };

  // Clic sur le bouton déclencheur
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isOpen) {
      closeMenu(true);
    } else {
      openMenu();
    }
  });

  // Fermeture par clic sur le fond assombri
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeMenu(true);
    });
  }

  // Fermeture lors d'un clic sur un lien de navigation
  navbarMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu(false);
    });
  });

  // Fermeture par la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu(true);
    }
  });

  // Réinitialisation automatique si la fenêtre s'élargit en mode bureau
  const mediaQuery = window.matchMedia('(min-width: 901px)');
  const handleViewportChange = (e) => {
    if (e.matches && isOpen) {
      closeMenu(false);
    }
  };
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleViewportChange);
  } else {
    // Fallback pour anciens navigateurs
    mediaQuery.addListener(handleViewportChange);
  }
})();
