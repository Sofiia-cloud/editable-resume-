import '../../styles/tools.css';

export default function createTools() {
  const section = document.createElement('section');
  section.className = 'resume-section';
  section.setAttribute('data-ripple', '');
  section.id = 'tools';

  const heading = document.createElement('h3');
  heading.textContent = 'Tools';
  heading.contentEditable = true;

  const container = document.createElement('div');
  container.className = 'tools-container';

  const tools = [
    { category: 'design', icon: 'design.svg' },
    { category: 'no-code', icon: 'no-code.svg' },
    { category: 'artificial intelligence', icon: 'artificial-intelligence.svg' }
  ];

  tools.forEach(tool => {
    const toolItem = document.createElement('div');
    toolItem.className = 'tool-item';

    const chip = document.createElement('div');
    chip.className = 'tool-chip';
    chip.textContent = tool.category;
    chip.contentEditable = true;

    const imgContainer = document.createElement('div');
    imgContainer.className = 'tool-image-container';

    const img = document.createElement('img');
    img.src = `./${tool.icon}`;
    img.alt = tool.category;
    img.className = 'tool-image';

    imgContainer.appendChild(img);
    toolItem.append(chip, imgContainer);
    container.appendChild(toolItem);
  });

  section.append(heading, container);
  return section;
}