import '../../styles/main-info.css';

export default function createMainInfo() {
  const section = document.createElement('section');
  section.className = 'resume-section';
  section.setAttribute('data-ripple', '');
  section.id = 'main-information';

  const greeting = document.createElement('h4');
  greeting.textContent = "Hello 👋🏻 I'm";
  greeting.contentEditable = true;

  const name = document.createElement('h2');
  name.textContent = "Karthik SR";
  name.contentEditable = true;

  const position = document.createElement('h3');
  position.textContent = "UX/UI Designer";
  position.contentEditable = true;

  section.append(greeting, name, position);
  return section;
}