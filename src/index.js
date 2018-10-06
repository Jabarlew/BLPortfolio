document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const navToggleElement = document.querySelector('.main-header-menu-icon');

  navToggleElement.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });
});
