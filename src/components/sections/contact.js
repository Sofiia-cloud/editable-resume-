import '../../styles/contact.css';

export default function createContact() {
  const section = document.createElement('section');
  section.className = 'resume-section';
  section.setAttribute('data-ripple', '');
  section.id = 'contact';

  const heading = document.createElement('h3');
  heading.textContent = "Let's chat! I'm ready to work on exciting projects";
  heading.contentEditable = 'true';
  
  const emailLink = document.createElement('a');
  emailLink.href = 'mailto:sfkarthik.designscope@gmail.com';
  emailLink.textContent = 'sfkarthik.designscope@gmail.com';
  emailLink.contentEditable = 'true';

  section.append(heading, emailLink);
  return section;
}