$(document).ready(function () {
  /* HAMBURGER MENU */
  $(document).delegate('.open', 'click', function (event) {
    $(this).addClass('oppenned');
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function (event) {
    $('.open').removeClass('oppenned');
  })
  $(document).delegate('.cls', 'click', function (event) {
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
  /* NAVBAR HEIGHT ON SCROLL */
  $(window).scroll(function () {
    var position = $(this).scrollTop();
    if (position >= 200) {
      $('.header__nav').addClass('header__nav-scrolled');
    } else {
      $('.header__nav').removeClass('header__nav-scrolled');
    }
  });
  /* INPUT MASK FOR PHONE NUMBER */

  (function ($) {
    $.fn.usPhoneFormat = function (options) {
      var params = $.extend({
        format: 'xxx-xxx-xxxx',
        international: false,

      }, options);

      if (params.format === 'xxx-xxx-xxxx') {
        $(this).bind('paste', function (e) {
          e.preventDefault();
          var inputValue = e.originalEvent.clipboardData.getData('Text');
          if (!$.isNumeric(inputValue)) {
            return false;
          } else {
            inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
            $(this).val(inputValue);
            $(this).val('');
            inputValue = inputValue.substring(0, 12);
            $(this).val(inputValue);
          }
        });
        $(this).on('keydown touchend', function (e) {
          if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
          }
          var curchr = this.value.length;
          var curval = $(this).val();
          if (curchr == 3 && e.which != 8 && e.which != 0) {
            $(this).val(curval + "-");
          } else if (curchr == 7 && e.which != 8 && e.which != 0) {
            $(this).val(curval + "-");
          }
          $(this).attr('maxlength', '12');
        });

      } else if (params.format === '(xxx) xxx-xxxx') {
        $(this).on('keydown touchend', function (e) {
          if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
          }
          var curchr = this.value.length;
          var curval = $(this).val();
          if (curchr == 3 && e.which != 8 && e.which != 0) {
            $(this).val('(' + curval + ')' + " ");
          } else if (curchr == 9 && e.which != 8 && e.which != 0) {
            $(this).val(curval + "-");
          }
          $(this).attr('maxlength', '14');
        });
        $(this).bind('paste', function (e) {
          e.preventDefault();
          var inputValue = e.originalEvent.clipboardData.getData('Text');
          if (!$.isNumeric(inputValue)) {
            return false;
          } else {
            inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"));
            $(this).val(inputValue);
            $(this).val('');
            inputValue = inputValue.substring(0, 14);
            $(this).val(inputValue);
          }
        });

      }
    }
  }(jQuery));

  $('#phone').usPhoneFormat({
    format: '(xxx) xxx-xxxx',
  });
});