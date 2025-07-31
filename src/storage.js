export function initStorage() {
  if (!localStorage.getItem('resumeData')) {
    localStorage.setItem('resumeData', JSON.stringify({}));
  }
}

export function generateUniqueId(element) {
  if (element.id) return element.id;

  const content = element.textContent.trim().toLowerCase();
  const type = element.tagName.toLowerCase();
  const hash = content.split('').reduce((acc, char) => 
    ((acc << 5) - acc) + char.charCodeAt(0), 0);

  const uniqueId = `${type}-${Math.abs(hash)}`;
  element.id = uniqueId;
  return uniqueId;
}

export function saveEditableContent(element) {
  try {
    localStorage.setItem(generateUniqueId(element), element.textContent.trim());
  } catch (error) {
    console.error('Failed to save content:', error);
  }
}

export function loadEditableContent(element) {
  try {
    const savedContent = localStorage.getItem(generateUniqueId(element));
    if (savedContent !== null) element.textContent = savedContent;
  } catch (error) {
    console.error('Failed to load content:', error);
  }
}

export function saveAllEditableContent() {
  document.querySelectorAll('[contenteditable="true"]').forEach(saveEditableContent);
}

export function loadAllEditableContent() {
  document.querySelectorAll('[contenteditable="true"]').forEach(loadEditableContent);
}