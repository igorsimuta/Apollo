$(document).ready(function(){
	
	 let pull = $('#pull'),
	     nav = $('.navigation ul');

     $(pull).on('click',function(event){

     		event.preventDefault();

     		nav.slideToggle();

     		$(this).toggleClass('navigation__toggle-button--active');


     })

     $(window).resize(function(){
     	
     	let w = $(window).width();

     	if (w > 780 && nav.is(':hidden')) {

     		nav.removeAttr('style');
     	}
	});

     let w = $(window).width();
     if (w < 992) {
          $('nav.navigation a').on('click',function(){
               nav.slideToggle();
          })
     }

     $('#top-slider').owlCarousel({
          singleItem: true,
          navigation: true,
          theme: "top-slider-theme",
          navigationText: ["",""],
          slideSpeed: 600
     });

     $('nav.navigation a').mPageScroll2id({
          highlightSelector: "nav.navigation a"
     });
});     