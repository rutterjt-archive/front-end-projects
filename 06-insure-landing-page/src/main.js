function openNav() {
  $('.nav__list').addClass('nav__list--open');
  $('body').addClass('no-scroll');
  $('.nav__open').addClass('hidden');
  $('.nav__close').removeClass('hidden');
}

function closeNav() {
  $('.nav__list').removeClass('nav__list--open');
  $('body').removeClass('no-scroll');
  $('.nav__open').removeClass('hidden');
  $('.nav__close').addClass('hidden');
}

function toggleNav() {
  console.log('Function');
  if ($('.nav__list').hasClass('nav__list--open')) {
    closeNav();
  } else {
    openNav();
  }
}

$(document).ready(function () {
  $('#nav-toggle').on('click', toggleNav);
});
