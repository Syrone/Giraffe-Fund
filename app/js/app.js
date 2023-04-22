// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	const addEventOnElements = function (elements, eventType, callback) {
		for (let i = 0, len = elements.length; i < len; i++) {
			elements[i].addEventListener(eventType, callback)
		}
	}

	// Navbar toggler for mobile
	const navbar = document.querySelector('[data-navbar]'),
		navTogglers = document.querySelectorAll('[data-nav-toggler]'),
		navLink = document.querySelectorAll('[data-nav-link]'),
		overlay = document.querySelector('[data-overlay]')

	const toggleNav = function () {
		if (overlay.classList.contains('active')) {
			overlay.classList.remove('active')
			navbar.classList.remove('active')
			document.body.classList.remove('nav-active')
		} else {
			overlay.classList.add('active')
			navbar.classList.add('active')
			document.body.classList.add('nav-active')
		}
	}

	addEventOnElements(navTogglers, 'click', toggleNav)

	// CHANGE BACKGROUND HEADER
	const scrollHeader = () => {
		const header = document.querySelector('[data-header]')
		// When the scroll is greater than 50 viewport height, add the .scroll-header
		globalThis.scrollY >= 50 ? header.classList.add('active')
			: header.classList.remove('active')
	}
	window.addEventListener('scroll', scrollHeader)

	//CALLING THE REGISTRATION FORM
	const signupForm = document.querySelector('[data-form-signup]'),
		loginForm = document.querySelector('[data-form-login]'),
		loginLink = document.querySelector('[data-login-link]'),
		signLink = document.querySelector('[data-signup-link]'),
		signupBtn = document.querySelectorAll('[data-btn-signup]'),
		closeBtn = document.querySelectorAll('[data-btn-close]')

	const openForm = function () {
		overlay.classList.add('active')
		signupForm.classList.add('active')
		document.body.classList.add('nav-active')
	}

	const closeForm = function () {
		overlay.classList.remove('active')
		signupForm.classList.remove('active')
		loginForm.classList.remove('active')
		document.body.classList.remove('nav-active')
	}

	loginLink.addEventListener('click', () => {
		signupForm.classList.remove('active')
		loginForm.classList.add('active')
	})

	signLink.addEventListener('click', () => {
		loginForm.classList.remove('active')
		signupForm.classList.add('active')
	})

	addEventOnElements(signupBtn, 'click', openForm)
	addEventOnElements(closeBtn, 'click', closeForm)
	overlay.addEventListener('click', closeForm)

})
