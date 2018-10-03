
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
  
    const navToggleElement = document.querySelector('.header-menu-icon');
  
    navToggleElement.addEventListener('click',  () => {
      navToggleElement.classList.toggle('menu-open');
    });
  });