// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll hide/show effect
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const navbar = document.querySelector(".navbar"); // You’re using class, not ID
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formEntries = Object.fromEntries(formData.entries());

    console.log('Form submitted:', formEntries);
    this.reset();
    alert('Thank you for your message! I will get back to you soon.');
  });
}

// Intersection animation for skill/cert cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach((card) => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});
