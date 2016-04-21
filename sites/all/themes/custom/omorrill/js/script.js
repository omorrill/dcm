var pass = ("Konami");

(function($) {
	"use strict";
	$(function() {
	
		$(window).konami({
			cheat: function() {
				// alert( 'Cheat code activated!' );
				var hobbit = $("#hobbit")[0];
							$("#hobbit")
								.ready(function() {
									hobbit.play();
							});	
				var run = window.prompt ("What's the password?");
					if (run == pass) {
							alert ("You win a brand new car!");
							alert('...Just kidding.');
					} else {
						alert ("Incorrect! Prepare to be terminated.");
						alert ("...Just kidding.");
					}
					$('#hobbit').ready(function() {
						hobbit.pause();
					});
			} // end cheat
		});
		
	});
}(jQuery));