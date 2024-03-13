$(document).ready(function () {

   $(".open-menu-js").on("click", function () {
      $hidden_menu = $(".toggle-js");
      $hidden_menu.addClass("active");
   })

   $(".close-menu-js").on("click", function () {
      $hidden_menu = $(".toggle-js");
      $hidden_menu.removeClass("active");
   })
})

$(window).on('load', function () {
   $('.preloader').removeClass('active');


});