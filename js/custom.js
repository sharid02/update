//smoothScroll
$('a').smoothScroll();

//mobile navbar hide after click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
})

