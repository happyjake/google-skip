'use strict';

(function($){	

	var replace_links = function() {
		$('li.g h3.r a').filter(function(i,a){
			return $(a).attr('_from') !== "skip";
		}).replaceWith(function() {
			// console.log(this);
			return "<a href=\"" + $(this).attr('href') + "\" target=\"_blank\" _from=\"skip\">" + $(this).text() + "</a>"
		});
	};
	
	$(document).ready(function() {
		replace_links();

		MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

		var observer = new MutationObserver(function(mutations, observer) {
		    // fired when a mutation occurs
		    // console.log(mutations, observer);

		    replace_links();
		});

		// define what element should be observed by the observer
		// and what types of mutations trigger the callback
		observer.observe(document, {
		  subtree: true,
		  attributes: true
		});
	});

})(jQuery);
