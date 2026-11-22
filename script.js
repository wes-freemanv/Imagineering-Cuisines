document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav-menu');

  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('hidden');
    });

    // Close menu upon item selection
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.add('hidden');
      });
    });
  }
});
