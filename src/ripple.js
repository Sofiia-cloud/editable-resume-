document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    const rippleTarget = e.target.closest('[data-ripple]');
    if (!rippleTarget) return;

    const rect = rippleTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    
    ripple.classList.add('ripple-effect');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size/2}px`;
    ripple.style.top = `${e.clientY - rect.top - size/2}px`;
    
    const color = rippleTarget.getAttribute('data-ripple-color');
    if (color) ripple.style.backgroundColor = color;
    
    rippleTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});