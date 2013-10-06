'use strict';

(function($){	

	var replace_links = function() {
		$('li.g h3.r a').replaceWith(function() {
		  return "<a href=\"" + $(this).attr('href') + "\" target=\"_window\">" + $(this).text() + "</a>"
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