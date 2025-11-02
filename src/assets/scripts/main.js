const SELECTORS = {
  navToggle: '.header__toggle',
  nav: '#main-nav',
  navLinks: '[data-scroll]',
};

function addMobileNav() {
  const btn = document.querySelector(SELECTORS.navToggle);
  const nav = document.querySelector(SELECTORS.nav);
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('nav--open');
  });

  document.querySelectorAll(SELECTORS.navLinks).forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}


function makeSmoothScroll() {
  document.querySelectorAll(SELECTORS.navLinks).forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      const offset = 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  addMobileNav();
  makeSmoothScroll();
  setCurrentYear();
});
