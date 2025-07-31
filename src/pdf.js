export async function generatePDF() {
  const btn = document.getElementById('download-btn');
  if (!btn) return;
  
  try {
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Creating PDF...';
    btn.style.visibility = 'hidden';
    
    const { default: html2pdf } = await import('html2pdf.js');
    const element = document.getElementById('app') || document.querySelector('.resume-container');
    
    await html2pdf().set({
      margin: 10,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, allowTaint: true, logging: true },
      jsPDF: { unit: 'mm', format: 'a4' }
    }).from(element).save();
    
  } catch (error) {
    console.error('PDF Error:', error);
    alert(`PDF generation error: ${error.message}`);
  } finally {
    const btn = document.getElementById('download-btn');
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Download';
      btn.style.visibility = 'visible';
    }
  }
}