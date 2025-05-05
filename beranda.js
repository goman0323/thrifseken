  AOS.init();

  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
  }

  function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  }