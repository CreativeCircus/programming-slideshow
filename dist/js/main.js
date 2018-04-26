"use strict";

var slideshow = function slideshow(time, selector) {

	// find the element we're going to build the slideshow inside
	var $slideshowContainer = document.querySelector(selector);
	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector);
		return false;
	}

	return {
		// publicly accessible stuff goes here
	};
};

var mySlideshow1 = new slideshow(3000, ".slideshow1");
//# sourceMappingURL=main.js.map
