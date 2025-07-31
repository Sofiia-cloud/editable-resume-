import '../../styles/footer.css';

export default function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'resume-footer';

  const button = document.createElement('button');
  button.id = 'download-btn';
  button.className = 'ripple';
  button.textContent = 'Download';

  footer.appendChild(button);
  return footer;
}