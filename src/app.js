import createPhoto from './components/sections/photo.js';
import createMainInfo from './components/sections/main-info.js';
import createLanguages from './components/sections/languages.js';
import createExperience from './components/sections/experience.js';
import createEducation from './components/sections/education.js';
import createTools from './components/sections/tools.js';
import createInterests from './components/sections/interests.js';
import createContact from './components/sections/contact.js';
import createFooter from './components/sections/footer.js';

export default function createApp() {
  const app = document.createElement('div');
  app.id = 'app';
  
  const resumeContainer = document.createElement('div');
  resumeContainer.className = 'resume-container';

  const sections = [
    createPhoto(),
    createMainInfo(),
    createLanguages(),
    createExperience(),
    createTools(),
    createEducation(),
    createInterests(),
    createContact(),
    createFooter()
  ];

  resumeContainer.append(...sections);
  app.appendChild(resumeContainer);
  
  return app;
}