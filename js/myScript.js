
/*..........For Smooth Scrolling............*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/*...........Initialize wow file.................*/
	new WOW().init();

/*.............Changing Color on Scrolling....................*/

var $document = $(document),
	$element = $('.navbar'),
	navbarDefault = 'navbar-transparent';
	navbarBlack = 'navbar-onScrolling';

	fadeIn = 'fadeIn';

	$document.scroll(function(){
		if ($document.scrollTop() >= 100) {
			$element.addClass(navbarBlack);
			$element.removeClass(navbarDefault);
			
			$element.addClass(fadeIn);
		}
		else{
			$element.addClass(navbarDefault);
			$element.removeClass(navbarBlack);

			$element.removeClass(fadeIn);
		}
	});


/*.....................Progress Bar...............................*/

$(function(){

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });

    // Activate progress animation on scroll
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');

});




/*...............................Counter..........................................*/

$('.counter').countUp();


/*...........................Portfolio..........................................*/

var PortfolioIsotope = $('.Portfolio-container').isotope({
    itemSelector: '.Portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#Portfolio-flters li').on( 'click', function() {
    $("#Portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    PortfolioIsotope.isotope({ filter: $(this).data('filter') });
  });












/*.................................Back to top button .......................................*/


$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });