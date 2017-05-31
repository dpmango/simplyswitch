'use strict';

$(document).ready(function () {
  var _this = this;

  var _window = $(window);
  var _document = $(document);

  // Prevent # behavior
  $('[href="#"]').click(function (e) {
    e.preventDefault();
  });

  // Smoth scroll
  $('a[href^="#section"]').click(function () {
    var el = $(_this).attr('href');
    $('body, html').animate({
      scrollTop: $(el).offset().top }, 1000);
    return false;
  });

  // INPUT FOCUS

  $('.e-calc__input input').focusin(function () {
    $(this).parent().addClass('focused');
  });

  $('.e-calc__input input').focusout(function () {
    $(this).parent().removeClass('focused');
  });

  // Masked input
  $("#date").mask("99/99/9999", { placeholder: "mm/dd/yyyy" });
  $("input[name='phone']").mask("9 (999) 999-9999");
  $("#tin").mask("99-9999999");
  $("#ssn").mask("999-99-9999");
});