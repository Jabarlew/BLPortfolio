document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const navToggleElement = document.querySelector('.main-header-menu-icon');

  navToggleElement.addEventListener('click', () => {
    navToggleElement.classList.toggle('menu-open');
  });
});
