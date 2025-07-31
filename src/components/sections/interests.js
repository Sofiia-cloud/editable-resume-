import '../../styles/interests.css';

export default function createInterests() {
  const section = document.createElement('section');
  section.className = 'resume-section';
  section.setAttribute('data-ripple', '');
  section.id = 'interests';

  const heading = document.createElement('h3');
  heading.textContent = 'Interests';
  heading.contentEditable = true;

  const chipsContainer = document.createElement('div');
  chipsContainer.className = 'interests-container';

  const interests = [
    'branding', 'design', 'photography',
    'artificial intelligence', 'illustration',
    'typography', 'social networks', 'research', 'dron pilot', 'games'
  ];

  interests.forEach(interest => {
    const chip = document.createElement('div');
    chip.className = 'interest-chip';
    chip.textContent = interest;
    chip.contentEditable = true;
    chipsContainer.appendChild(chip);
  });

  section.append(heading, chipsContainer);
  return section;
}