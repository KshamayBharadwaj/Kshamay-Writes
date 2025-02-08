// Theme Toggle and Section Observer
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('header');

  // Theme functionality
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
    updateIcon();
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
    localStorage.setItem('theme', theme);
    updateIcon();
  });

  function updateIcon() {
    const isDark = body.classList.contains('dark-theme');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }

  // Section Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        updateActiveNav(sectionId);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  function updateActiveNav(sectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${ sectionId}`) {
        link.classList.add('active');
      }
    });
  }
}); 