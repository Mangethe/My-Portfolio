document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');

  function toggleMenu() {
    const isOpened = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpened);
  }

  // Toggle mobile menu
  hamburger.addEventListener('click', toggleMenu);

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const isOutsideClick = !mobileMenu.contains(e.target) && !hamburger.contains(e.target);
    
    if (mobileMenu.classList.contains('open') && isOutsideClick) {
      toggleMenu();
    }
  });
});