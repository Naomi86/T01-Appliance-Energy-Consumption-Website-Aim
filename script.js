// Navigation Function to swap pages using JavaScript
function navigateTo(pageId) {
  // Hide all page sections
  const pages = document.querySelectorAll('.page-section');
  pages.forEach(page => page.classList.remove('active-page'));

  // Deactivate all navigation buttons
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Show target page section
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active-page');
  }

  // Highlight active menu button
  const targetBtn = document.getElementById(`btn-${pageId}`);
  if (targetBtn) {
    targetBtn.classList.add('active');
  }
}

// Default page setup on DOM load
document.addEventListener('DOMContentLoaded', () => {
  navigateTo('home');
});