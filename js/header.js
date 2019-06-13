$(document).ready( function() {

  $(window).scroll( () => {

    const scrollTop = $(window).scrollTop();

    if( scrollTop <= 54 )
    {
      $(".header-main, .header-uppermost").css( 'position', 'relative' );
    }
    else if (scrollTop > 54)
    {
      $(".header-main, .header-uppermost").css( 'position', 'fixed' );
      $(".header-main").animate({marginTop: "45px", zIndex: "2"});
    }
  });

});
