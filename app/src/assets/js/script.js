//Protect my script for conflict with another versions of jQuery
jQuery.noConflict();
(function( $ ) {
  $(function() {
    // Protect the alias $ to jQuery for my script
    $('.btn').click(function(){
        alert('Alo Mundo - JS Minificado!');
    });
  });
})(jQuery);
// Code that uses other library's $ can follow here.