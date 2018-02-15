//smoothScroll


$(document).ready(function(){
	$('a').smoothScroll();

});


//mobile navbar hide after click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
})

// owl js
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay : 5000,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});