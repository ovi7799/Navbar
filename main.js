const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToggle() {
  document.body.classList.toggle('mobile-nav-active');
  if (mobileNavToggleBtn.classList.contains('ri-menu-line')) {
    mobileNavToggleBtn.classList.remove('ri-menu-line');
    mobileNavToggleBtn.classList.add('ri-close-line');
  } else {
    mobileNavToggleBtn.classList.remove('ri-close-line');
    mobileNavToggleBtn.classList.add('ri-menu-line');
  }
}

mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

