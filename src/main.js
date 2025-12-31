import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/footer.css';
import '../styles/components/contact.css';
import '../styles/utils.css';

// Mobile menu toggle
const headerBars = document.querySelector('.header__bars');
const headerMenu = document.querySelector('.header__menu');

if (headerBars && headerMenu) {
  headerBars.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu--mobile');
  });
}

// Theme toggle
const themeToggle = document.querySelector('.header__sun');
const root = document.documentElement;

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    // Add your theme toggle logic here
    console.log('Theme toggle clicked');
  });
}

// Form submission
const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log('Form submitted:', { name, email, message });
    
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    
    // Only prevent default for anchor links
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        if (headerMenu) {
          headerMenu.classList.remove('header__menu--mobile');
        }
      }
    }
  });
});