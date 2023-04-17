// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	const addEventOnElements = function(elements, eventType, callback) {
		for(let i = 0, len = elements.length; i < len; i++) {
			elements[i].addEventListener(eventType, callback)
		}
	}

	// Navbar toggler for mobile
	const navbar = document.querySelector('[data-navbar]'),
			navTogglers = document.querySelectorAll('[data-nav-toggler]'),
			overlay = document.querySelector('[data-overlay]')

	const toggleNav = function() {
		navbar.classList.toggle('active')
		overlay.classList.toggle('active')
		document.body.classList.toggle('nav-active')
	}

	addEventOnElements(navTogglers, 'click', toggleNav)

	// CHANGE BACKGROUND HEADER
	const scrollHeader = () => {
		const header = document.querySelector('[data-header]')
		// When the scroll is greater than 50 viewport height, add the .scroll-header
		globalThis.scrollY >= 50  ? header.classList.add('active')
								  : header.classList.remove('active')
	}
	window.addEventListener('scroll', scrollHeader)

})
