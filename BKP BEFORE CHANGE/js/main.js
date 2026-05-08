/* ============================================================
   MOBILE DETAILING TAURANGA — main.js
   ============================================================ */

/* ------------------------------------------------------------
   Services — vehicle size tab switcher
   ------------------------------------------------------------ */
 
function switchTab(event, size) {
  // Update tab buttons
  document.querySelectorAll('.vehicle-tab').forEach(function(tab) {
    tab.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
 
  // Update panels
  document.querySelectorAll('.tab-panel').forEach(function(panel) {
    panel.classList.remove('active');
  });
  document.getElementById('tab-' + size).classList.add('active');
}

/* ------------------------------------------------------------
   Contact Form — booking submission handler
   ------------------------------------------------------------ */

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Request Sent ✓';
  btn.style.background = '#2a5c2a';
  btn.style.color = '#a8e6a8';
  btn.disabled = true;
  e.target.reset();
}
