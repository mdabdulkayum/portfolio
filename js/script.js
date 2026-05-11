// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  links.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
});

// ===== MOBILE NAV =====
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');
menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  menuBtn.querySelector('i').className = mobileNav.classList.contains('open') ? 'bx bx-x' : 'bx bx-menu';
});
function closeMobileNav() {
  mobileNav.classList.remove('open');
  menuBtn.querySelector('i').className = 'bx bx-menu';
}

// ===== DARK / LIGHT MODE =====
const toggle = document.getElementById('dark-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const icon = toggle.querySelector('i');
  icon.className = document.body.classList.contains('light') ? 'bx bx-sun' : 'bx bx-moon';
});

// ===== SKILLS TABS =====
function switchTab(name) {
  document.querySelectorAll('.skill-tab').forEach((t, i) => {
    const tabs = ['mobile','backend','languages','tools'];
    t.classList.toggle('active', tabs[i] === name);
  });
  document.querySelectorAll('.skills-panel').forEach(p => {
    p.classList.toggle('active', p.id === 'tab-' + name);
  });
}

// ===== PROJECT FILTER =====
function filterProjects(cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    const cats = card.dataset.category || '';
    if (cat === 'all' || cats.includes(cat)) {
      card.removeAttribute('data-hidden');
      card.style.display = '';
    } else {
      card.setAttribute('data-hidden', '');
      card.style.display = 'none';
    }
  });
}

// ===== FADE IN ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));