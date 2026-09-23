// =========================================================
// AliaBeauty — script principal
// - Menú responsive
// - Pestañas de líneas de producto
// - Generación del código QR (usa la librería QRCode.js vía CDN)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Menú responsive ----
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }

  // ---- Pestañas de líneas de producto (Gel / Mantequilla / Splash) ----
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // ---- Código QR ----
  // EDITA esta URL cuando publiques el sitio en GitHub Pages, por ejemplo:
  // https://tu-usuario.github.io/aliabeauty/
  const SITE_URL = 'https://tu-usuario.github.io/aliabeauty/';

  const qrContainer = document.getElementById('qr-code');
  if (qrContainer && window.QRCode) {
    new QRCode(qrContainer, {
      text: SITE_URL,
      width: 160,
      height: 160,
      colorDark: '#3B4F82',
      colorLight: '#ffffff',
    });
  }

  const qrLink = document.getElementById('qr-url-label');
  if (qrLink) qrLink.textContent = SITE_URL;
});
