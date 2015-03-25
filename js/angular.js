$(document).ready(function(){	
	$(".profil").hide();
	
	// smooth scroll function
	$('a[href="#secondPage"]').on('click',function(e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
			$(".profil").fadeIn(1000);
		});
	});	
});		