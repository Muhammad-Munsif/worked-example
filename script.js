// Navbar toggle
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll-triggered animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
  observer.observe(el);
});

const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change button icon
  if (document.body.classList.contains('dark-mode')) {
    modeToggle.textContent = '☀️';
  } else {
    modeToggle.textContent = '🌙';
  }
});
