(function($) {
  'use strict';

    
    if (typeof WOW == "function")
        new WOW().init();
    /*---------------------------------------------------------------------
     Mobile Menu
    ----------------------------------------------------------------------*/
    if($(window).width() < 991){
      jQuery('.menu-icon').on("click", function() {
        jQuery(this).toggleClass('active');
        jQuery('body').toggleClass('menu-open');
        jQuery('nav ul li a').on("click", function(){
          jQuery('.menu-icon').removeClass('active');
          jQuery('body').removeClass('menu-open');
        });
      });
    }
    
    // mobile dropdown coad
      if(jQuery(window).width() < 767 ){
          jQuery('.select-filter').click(function() {
            jQuery(this).next('ul').slideToggle('600');
          });
          jQuery('.tab-section ul.nav span').click(function() {
            var text = jQuery(this).text();
            jQuery(this).parents('ul').prev('.select-filter').text(text);
            jQuery(".tab-section ul.nav").hide();
          });
      }

}) (jQuery);