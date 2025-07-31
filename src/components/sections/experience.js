import '../../styles/experience.css';

export default function createExperience() {
  const section = document.createElement('section');
  section.className = 'resume-section';
  section.setAttribute('data-ripple', '');
  section.id = 'experience';

  const heading = document.createElement('h3');
  heading.textContent = 'Experience';
  heading.contentEditable = true;

  const container = document.createElement('div');
  container.className = 'experience-container';

  const experiences = [
    {
      period: 'Jun. 2023 - Present',
      tag: 'most recent',
      title: 'Marketing Manager',
      company: 'Pankayam | Full-time',
      items: [
        'Strategy development and planning of campaigns',
        'SEO Content Creation for Blogs, Website, Social media'
      ],
      size: 'small'
    },
    {
      period: 'Mar. 2022 - May 2023',
      title: 'Digital Marketer',
      company: 'Freelance',
      items: [
        'Development of internal projects from scratch, product design of brands',
        'Landing page, webapps and hybrid apps',
        'Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.'
      ],
      size: 'large'
    },
    {
      period: '2020 - 2022',
      title: 'Graphic Designer',
      company: 'Studio Design',
      items: [
        'Provide administrative support to lawyer and enhance office effectiveness',
        'Handle communication with clients, witnesses etc',
        'repare case briefs and summarize depositions, interrogatories and testimony'
      ],
      size: 'medium'
    }
  ];

  experiences.forEach(exp => {
    const square = document.createElement('div');
    square.className = `experience-square ${exp.size}`;

    const leftCol = document.createElement('div');
    leftCol.className = 'experience-left-col';

    const period = document.createElement('div');
    period.className = 'experience-period';
    period.textContent = exp.period;
    period.contentEditable = true;

    const title = document.createElement('div');
    title.className = 'experience-title';
    title.textContent = exp.title;
    title.contentEditable = true;

    const company = document.createElement('div');
    company.className = 'experience-company';
    company.textContent = exp.company;
    company.contentEditable = true;

    leftCol.append(period, title, company);

    const rightCol = document.createElement('div');
    rightCol.className = 'experience-right-col';

    if (exp.size === 'small' && exp.tag) {
      const tag = document.createElement('div');
      tag.className = 'experience-tag';
      tag.textContent = exp.tag;
      rightCol.appendChild(tag);
    }

    const itemsContainer = document.createElement('ul');
    itemsContainer.className = 'experience-items';

    exp.items.forEach(item => {
      const itemElement = document.createElement('li');
      itemElement.className = 'experience-item';
      itemElement.textContent = item;
      itemElement.contentEditable = true;
      itemsContainer.appendChild(itemElement);
    });

    rightCol.appendChild(itemsContainer);
    square.append(leftCol, rightCol);
    container.appendChild(square);
  });

  section.append(heading, container);
  return section;
}