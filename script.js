// Function to swap between Home, Televisions, and About Us pages
function navigateTo(pageId) {
  // Hide all sections
  const pages = document.querySelectorAll('.page-section');
  pages.forEach(page => page.classList.remove('active-page'));

  // Reset active navbar buttons
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Display target page section
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active-page');
  }

  // Highlight active menu button
  const targetBtn = document.getElementById(`btn-${pageId}`);
  if (targetBtn) {
    targetBtn.classList.add('active');
  }

  // Scroll smoothly back to top when switching pages
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
  navigateTo('home');
});