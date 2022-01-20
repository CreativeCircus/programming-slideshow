
let makeSlideshow = function(time, slidesData, selector) {

	// find the element we're going to build the slideshow inside
	let $slideshowContainer = document.querySelector(selector);
	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector)
		return false
	}
	// create any needed containing elements 
	let $slidesContainer = document.createElement('div');
	$slidesContainer.classList.add('slides')
	$slideshowContainer.appendChild($slidesContainer)

	// create elements for actual slides
	slidesData.forEach(function(slideData) { // note pluralization
		let $slide = document.createElement("img")
		$slide.src = slideData.filename;
		$slidesContainer.appendChild($slide)
	});

	// unfinished
}


makeSlideshow(3000, [
	{
		filename: "dist/img/sunset1.jpg",
		title: "A sunset"
	},
	{
		filename: "dist/img/sunset2.jpg",
		title: "Another sunset"
	},
	{
		filename: "dist/img/sunset3.jpg",
		title: "The sun going toward the horizon"
	},
	{
		filename: "dist/img/sunset4.jpg",
		title: "The end of a day"
	},
], ".slideshow")