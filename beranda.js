function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const button = document.querySelector('.hamburger');
  if (!menu) return;
  const isOpen = menu.classList.toggle('active');
  if (button) button.setAttribute('aria-expanded', String(isOpen));
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
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const mobileMenu = document.getElementById('mobileMenu');
  const button = document.querySelector('.hamburger');
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        if (button) button.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
