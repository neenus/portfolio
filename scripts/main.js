$(document).ready(function(){
  
  // sticky header on scroll
  let $header = $('header');
  let $sticky = $header.before($header.clone().addClass('sticky'));

  $(window).on('scroll', function() {
    let $scrollFromTop = $(window).scrollTop();
    $('body').toggleClass('scroll', ($scrollFromTop > 200));
  });

  // Smooth scroll
  $('.menu li a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    let target = $(this.hash);
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top -60
      }, 1000);
    } 
  });

  $('.logo a[href^="#').on('click', function(e) {
    e.preventDefault();
    let target = $(this.hash);
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  

  // Responsive menu
  let body = $('body');
  let menuTrigger = $('.js-menu-trigger');
  let mainOverlay = $('.js-main-overlay');

  menuTrigger.on('click', function() {
    body.addClass('active-menu');
  });

  $('.menu li a').on('click', function() {
    body.removeClass('active-menu');
  });

  mainOverlay.on('click', function() {
    body.removeClass('active-menu');
  });

  // contact form ... appear on click of contact btn

  $('a#contact').on('click', function() {
    body.addClass('contact-form-active');
  });

  $('#contact-btn').on('click', function() {
    body.addClass('contact-form-active');
  });

  mainOverlay.on('click', function() {
    body.removeClass('contact-form-active');
  });

  
});