// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const formEntries = Object.fromEntries(formData.entries());
  
  // Here you would typically send the form data to a server
  console.log('Form submitted:', formEntries);
  
  // Clear form and show success message
  this.reset();
  alert('Thank you for your message! I will get back to you soon.');
});

// Add animation to skill cards and certification cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('.skill-card, .certification-card').forEach((card) => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.5s ease-out';
  observer.observe(card);
});
