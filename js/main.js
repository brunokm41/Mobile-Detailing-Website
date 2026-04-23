/* ============================================================
   MOBILE DETAILING TAURANGA — main.js
   ============================================================ */


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
