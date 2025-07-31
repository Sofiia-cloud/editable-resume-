import '../../styles/photo.css';

export default function createPhoto() {
  const section = document.createElement('section');
  section.className = 'resume-section';
  section.setAttribute('data-ripple', '');
  section.id = 'photo';

  const photoContainer = document.createElement('div');
  photoContainer.className = 'photo-container';

  const img = document.createElement('img');
  img.src = './profileImg.svg';
  img.alt = 'Profile Photo';
  img.className = 'profile-photo';

  photoContainer.appendChild(img);
  section.appendChild(photoContainer);
  
  return section;
}