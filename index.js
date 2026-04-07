document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Charge le thème sauvegardé ou détecte selon préférence système
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  body.classList.toggle('theme-light', savedTheme === 'light');
  toggle.classList.toggle('theme-light', savedTheme === 'light');
  
  toggle.addEventListener('click', () => {
    const isLight = body.classList.contains('theme-light');
    const newTheme = isLight ? 'dark' : 'light';
    
    body.classList.toggle('theme-light');
    toggle.classList.toggle('theme-light');
    
    localStorage.setItem('theme', newTheme);
  });
});