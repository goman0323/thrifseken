function toggleMenu() {
  const menu = document.querySelector('[data-mobile-menu]');
  const button = document.querySelector('[data-menu-button]');
  if (!menu || !button) return;

  const isOpen = menu.classList.toggle('active');
  button.setAttribute('aria-expanded', String(isOpen));
}

function toggleDarkMode() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  if (nextTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }

  localStorage.setItem('thrifseken-theme', nextTheme);
}

(function initTheme() {
  const savedTheme = localStorage.getItem('thrifseken-theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('[data-menu-button]');
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleDarkMode);
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const yearTarget = document.querySelector('[data-year]');
  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
});
