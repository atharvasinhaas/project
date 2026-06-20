// Highlight on hover functionality
document.addEventListener('DOMContentLoaded', function() {
  const highlightableElements = document.querySelectorAll('[data-highlight]');
  
  highlightableElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#FFFF00';
      this.style.transition = 'background-color 0.3s ease';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
    });
  });
});
