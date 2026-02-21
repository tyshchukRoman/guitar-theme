export default function (el) {

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');

  mobileMenuBtn.addEventListener('click', () => {
     const isOpen = navLinks.classList.toggle('active');
     navCta.classList.toggle('active', isOpen);
     mobileMenuBtn.textContent = isOpen ? '✕' : '☰';

     // Dynamically position CTA below nav-links
     if (isOpen) {
        setTimeout(() => {
           const navLinksHeight = navLinks.offsetHeight;
           navCta.style.top = `calc(100% + ${navLinksHeight}px)`;
        }, 10);
     }
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
     link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navCta.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
     });
  });

}
