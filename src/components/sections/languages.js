import '../../styles/languages.css';

export default function createLanguages() {
  const section = document.createElement('section');
  section.className = 'resume-section';
  section.setAttribute('data-ripple', '');
  section.id = 'languages';

  const heading = document.createElement('h3');
  heading.textContent = 'Languages';
  heading.contentEditable = true;

  const languagesContainer = document.createElement('div');
  languagesContainer.className = 'languages-container';

  const languages = [
    { name: 'English', level: 100 },
    { name: 'Malayalam', level: 100 },
    { name: 'Hindi', level: 80 }
  ];

  languages.forEach((lang, index) => {
    const item = document.createElement('div');
    item.className = 'language-item';
    item.style.animationDelay = `${index * 0.2}s`;

    const nameContainer = document.createElement('div');
    nameContainer.className = 'language-name';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = lang.name;
    nameSpan.contentEditable = true;

    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';

    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = `${lang.level}%`;

    nameContainer.appendChild(nameSpan);
    barContainer.appendChild(bar);
    item.append(nameContainer, barContainer);
    languagesContainer.appendChild(item);
  });

  section.append(heading, languagesContainer);
  return section;
}