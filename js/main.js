/* ============================================================
   MOBILE DETAILING TAURANGA — main.js
   ============================================================ */


/* ------------------------------------------------------------
   Mobile nav toggle
   ------------------------------------------------------------ */

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const isOpen = links.style.display === 'flex';
  links.style.display = isOpen ? 'none' : 'flex';
  if (!isOpen) {
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '72px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'rgba(8,11,15,0.98)';
    links.style.padding = '1.5rem';
    links.style.gap = '1.25rem';
    links.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
  }
}

/* Close menu when a link is clicked */
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 960) {
        const links = document.querySelector('.nav-links');
        links.style.display = 'none';
      }
    });
  });
});


/* ------------------------------------------------------------
   Services — vehicle size tab switcher (detailing.html)
   ------------------------------------------------------------ */

function switchTab(event, size) {
  document.querySelectorAll('.vehicle-tab').forEach(function(tab) {
    tab.classList.remove('active');
  });
  event.currentTarget.classList.add('active');

  document.querySelectorAll('.tab-panel').forEach(function(panel) {
    panel.classList.remove('active');
  });
  const panel = document.getElementById('tab-' + size);
  if (panel) panel.classList.add('active');
}


/* ------------------------------------------------------------
   Contact Form — booking submission handler
   ------------------------------------------------------------ */

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Request Sent ✓';
  btn.style.background = '#0a6e2e';
  btn.style.color = '#a8e6c0';
  btn.disabled = true;
  e.target.reset();
}
