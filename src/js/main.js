// new rule: no unintended consequences.
// don't fuck with anything else on the page.
// if we have more than one slideshow, they should run independently.
// that means SCOPE! both in variables and in finding elements
// for the variable scope we're actually going to learn a whole new technique, called Functional Prototypes
// this is where you write a function that builds a nice, self contained thing for you.
// everything it needs is inside the function, and nothing is left outside, lying around, for other devs to metaphorically step on
// if something is needed from outside, you can write your function to selectively expose certain things.
// vehicle example with ignition function that turns on fuel pump, etc

// brainstorm how slideshow works
// do it.

let slideshow = function (time, selector) {
	let intervalID

	// find the element we're going to build the slideshow inside
	let $slideshowContainer = document.querySelector(selector)
	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector)
		return false
	}

	let currentSlideNumber = 0
	let $slides = $slideshowContainer.querySelectorAll('.slide')

	let next = function () {
		let $currentSlide = $slideshowContainer.querySelector('.slide.active')
		$currentSlide.classList.remove('active')

		currentSlideNumber++
		if (currentSlideNumber >= $slides.length) {
			currentSlideNumber = 0
		}
		$slides[currentSlideNumber].classList.add('active')
	}

	let prev = function () {
		let $currentSlide = $slideshowContainer.querySelector('.slide.active')
		$currentSlide.classList.remove('active')

		currentSlideNumber--
		if (currentSlideNumber < 0) {
			currentSlideNumber = $slides.length - 1
		}
		$slides[currentSlideNumber].classList.add('active')
	}

	let stop = function () {
		clearInterval(intervalID)
	}

	let start = function () {
		stop()
		intervalID = setInterval(prev, time)
	}

	start()

	return {
		next: next,
		prev: prev,
		stop: stop,
		start: start,
	}
}

let mySlideshow1 = new slideshow(3000, '.slideshow1')
let mySlideshow2 = new slideshow(1000, '.slideshow2')
