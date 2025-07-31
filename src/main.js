import './ripple.js';
import { generatePDF } from './pdf.js';
import { saveAllEditableContent, loadAllEditableContent, initStorage } from './storage.js';
import createApp from './app.js';

const setupRippleEffect = () => {
  document.addEventListener('click', e => {
    const target = e.target.closest('.ripple');
    if (!target) return;
    
    const { left, top } = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    ripple.style.left = `${e.clientX - left}px`;
    ripple.style.top = `${e.clientY - top}px`;
    
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
};

const setupDownloadButton = () => {
  const downloadBtn = document.getElementById('download-btn');
  downloadBtn?.addEventListener('click', async e => {
    e.preventDefault();
    await generatePDF();
  });
};

const setupEditableFields = () => {
  loadAllEditableContent();
  document.addEventListener('input', e => {
    if (e.target.matches('[contenteditable="true"]')) {
      saveAllEditableContent();
    }
  });
};

const init = () => {
  document.getElementById('app').appendChild(createApp());
  initStorage();
  setupRippleEffect();
  setupDownloadButton();
  setupEditableFields();
};

document.addEventListener('DOMContentLoaded', init);