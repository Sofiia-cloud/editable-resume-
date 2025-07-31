import '../../styles/education.css';

export default function createEducation() {
  const section = document.createElement('section');
  section.className = 'resume-section';
  section.setAttribute('data-ripple', '');
  section.id = 'education';

  const heading = document.createElement('h3');
  heading.textContent = 'Education';
  heading.contentEditable = true;

  const container = document.createElement('div');
  container.className = 'education-container';

  const educations = [
    {
      year: '2023',
      title: 'UI/UX',
      tags: ['#UX', '#UI', '#research', '#DesignSystem', '#Ui', '#wireframing', '#figma', '#Ux'],
      institution: 'Coursera',
      size: 'large'
    },
    {
      year: '2017 - 2022',
      title: 'Law',
      tags: ['#law', '#legalStudies', '#contracts', '#internationalLaws'],
      institution: 'University of Kerala',
      size: 'medium'
    },
    {
      year: '2017',
      title: 'Graphic design',
      tags: ['#branding', '#web', '#illustration', '#adobe'],
      institution: 'Coursera',
      size: 'small'
    }
  ];

  educations.forEach(edu => {
    const square = document.createElement('div');
    square.className = `education-square ${edu.size}`;

    const yearContainer = document.createElement('div');
    Object.assign(yearContainer.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    });

    const year = document.createElement('div');
    year.className = 'education-year';
    year.textContent = edu.year;
    year.contentEditable = true;

    if (edu.size === 'large') {
      const heartIcon = document.createElement('img');
      Object.assign(heartIcon, {
        src: './Vector.svg',
        alt: 'heart',
        style: { width: '10px', height: '10px' }
      });
      yearContainer.append(year, heartIcon);
    } else {
      yearContainer.appendChild(year);
    }

    const title = document.createElement('div');
    title.className = 'education-title';
    title.textContent = edu.title;
    title.contentEditable = true;

    const institution = document.createElement('div');
    institution.className = 'education-institution';
    institution.textContent = edu.institution;
    institution.contentEditable = true;

    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'education-tags';

    edu.tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.className = 'education-tag';
      tagElement.textContent = tag;
      tagElement.contentEditable = true;
      tagsContainer.appendChild(tagElement);
    });

    square.append(yearContainer, title, institution, tagsContainer);
    container.appendChild(square);
  });

  section.append(heading, container);
  return section;
}