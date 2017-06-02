$(document).ready(function(){

  const _window = $(window);
  const _document = $(document);

 	// Prevent # behavior
	$('[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Smoth scroll
	$('a[href^="#section"]').click(function() {
    var el = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(el).offset().top}, 1000);
    return false;
	});

  // scrollbars
  $('.scrollbar-dynamic').scrollbar();

  // INPUT FOCUS
  $('.e-calc input').focusin(function(){
    $(this).closest('.e-calc__input').addClass('focused');
  });

  $('.e-calc input').focusout(function(){
    $(this).closest('.e-calc__input').removeClass('focused');
  });

  // POSTCODE SEARCH
  $('.js-hideseek').hideseek({

  });

  // POSTCODE SELECT ACTION
  $('.e-calc__options__list li').on('click', function(){
    var selectedAdress = $(this).text();
    $('.e-calc__options').addClass('selected');
    $('.js-eCalcSelectedAdress').text(selectedAdress);
  });

  $('.js-eCalcWrongPostcode').on('click', function(){
    $('.e-calc__options').removeClass('selected');
  });

  // STEP 2
  $('.disabled').on('click', function(e){
    e.preventDefault();
  });

  $('.js-toggleLogos').on('click', function(){
    var toggleLabel = $(this).find('label span');
    var toggableObjects = $(this).parent().find('.e-calc__checkbox--toggable');

    if (toggleLabel.text() == 'Show more'){
      toggleLabel.text('Show less')
      $(this).addClass('active');
      toggableObjects.addClass('visible');
    } else {
      toggleLabel.text('Show more')
      $(this).removeClass('active');
      toggableObjects.removeClass('visible');
    }


  });

  /////
  // UI
  /////

  // DATEPICKER
  $('.js-datepicker').datepicker({
    language: 'en',
    range: false,
    multipleDatesSeparator: " - "
  });

  // checkbox click
  $('.e-calc__checkbox').on('click', function(){
      var inputVal = $(this).find('input');

      // reset all active classes if this is radio
      if ( $(this).find('input').is(':radio') ){
        $(this).parent().find('.e-calc__checkbox').removeClass('selected');
      }

      if ( inputVal.is(':checked') ) {
        $(this).addClass('selected')
        $(this).closest('.e-calc__cta-logos').addClass('selected')
      } else {
        $(this).removeClass('selected');
        $(this).closest('.e-calc__cta-logos').removeClass('selected')
      }
  });


  // checkbox populate classes
  $('.e-calc__checkbox').find('input:checked').parent().addClass('selected');
  // if ( $('.e-calc__checkbox').find('input').is(':checked') ){
  //   $(this).addClass('selected');
  // }

  // select
  $('.e-calc__select__visible').on('click', function(){
    $(this).closest('.e-calc__select').toggleClass('active');
  });

  $('.e-calc__select__dropdown span').on('click', function(){
    var selectedVal = $(this).data('value');

    $(this).closest('.e-calc__select').toggleClass('active');

    $(this).closest('.e-calc__select').find('.e-calc__select__visible span').text(selectedVal);
    $(this).closest('.e-calc__select').find('input').val(selectedVal);
  });

  // toggler
  $('.e-calc__toggler__box').on('click', function(){
    var parentObj = $(this).parent();
    if ( parentObj.is('.right') ){
      parentObj.removeClass('right').addClass('left');
    } else if ( parentObj.is('.left') ){
      parentObj.removeClass('left').addClass('right');
    }
  });

  // NUMERIC INPUT

  $('.e-calc__input--number .icon').on('click', function(e){
  var element = $(this).parent().find('input');
  var currentValue = parseInt($(this).parent().find('input').val()) || 0;

  if( $(this).is('.icon-minus') ){
    if(currentValue <= 1){
      return false;
    }else{
      element.val( currentValue - 1 );
    }
  } else{
    if(currentValue >= 10){
      return false;
    } else{
      element.val( currentValue + 1 );
    }
  }
});

  // editable field
  $('.e-calc__editable__edit').on('click', function(){
    $(this).parent().addClass('active');
  });

  // Masked input
  $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
  $("input[type='tel']").mask("99999 999999");

  // BOOTSTRAP TOOLTIPS
  $('[data-toggle="tooltip"]').tooltip();

});
