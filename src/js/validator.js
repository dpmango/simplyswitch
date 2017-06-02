'use strict';

$(document).ready(function () {
  // JQUERY VALIDATION
  var validateErrorPlacement = function validateErrorPlacement(error, element) {
    // error.addClass('ui-input__validation');
    // error.appendTo(element.closest("form"));
    $(element).closest('form').find('.ui-input__validation').show();
  };
  var validateHighlight = function validateHighlight(element) {
    $(element).parent('div').addClass("has-error");
  };
  var validateUnhighlight = function validateUnhighlight(element) {
    $(element).parent('div').removeClass("has-error");
  };
  var validateSubmitHandler = function validateSubmitHandler(form) {
    $(form).addClass('loading');
    $.ajax({
      type: "POST",
      url: $(form).attr('action'),
      data: $(form).serialize(),
      success: function success(response) {
        $(form).removeClass('loading');
        var data = $.parseJSON(response);
        if (data.status == 'success') {
          // do something I can't test yet :)
        } else {
          $(form).find('[data-error]').html(data.message).show();
        }
      }
    });
  };

  var validatePhone = {
    required: true,
    normalizer: function normalizer(value) {
      var PHONE_MASK = '+X (XXX) XXX-XXXX';
      if (!value || value === PHONE_MASK) {
        return value;
      } else {
        return value.replace(/[^\d]/g, '');
      }
    },
    minlength: 11,
    digits: true

    ////////
    // FORMS

    // modal entry form
  };$(".js-step2Validate").validate({
    errorPlacement: validateErrorPlacement,
    highlight: validateHighlight,
    unhighlight: validateUnhighlight,
    submitHandler: validateSubmitHandler,
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      phone: validatePhone
    },
    messages: {
      name: "Заполните это поле",
      email: {
        required: "Заполните это поле",
        email: "Email содержит неправильный формат"
      },
      phone: {
        required: "Заполните это поле",
        minlength: "Введите корректный телефон"
      }
    }
  });
});