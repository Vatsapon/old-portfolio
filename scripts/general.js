
// Setup layout based on device's browser

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	loadMobile();
} else {
	loadDesktop();
}

// Initialization Header/Footer

/*
document.getElementById("header").innerHTML =
	`<div id="header-container" class="header">
		<div id="header-title">
			<p class="p-highlight" style="font-size: 100%">VATSAPON ASAWAKITTIPORN</p>
			<p style="font-size: 75%">Game Developer / Programmer</p>
		</div>
		<div id="header-nav">
			<a href="home.html" class="header-nav-btn btn">HOME</a>
			<div id="header-nav-proj">
				<a id="proj" class="header-nav-btn btn">PROJECTS &#128899;</a>
				<div id="proj-content">
					<a class="proj-item btn">Merrit</a>
					<a class="proj-item btn">Lily Party</a>
					<a class="proj-item btn">Final Frontier</a>
					<a class="proj-item btn">Mythical Love</a>
					<a class="proj-item btn">Slime Journey</a>
					<a class="proj-item btn">Lost & Found Co.</a>
				</div>
			</div>
			<a href="about.html" class="header-nav-btn btn">ABOUT</a>
			<a href="https://drive.google.com/file/d/1GojvCwZEUEFXQjEGFkxs2UiNSt_9K7im/view?usp=sharing" target="_blank" class="header-nav-btn btn">RESUME</a>
		</div>
	</div>
	<div class="header" style="
		position: relative;
		width: 100px;">
	</div>`;
	*/
document.getElementById("footer").innerHTML =
	`<div id="footer-contact">
		<p class="p-highlight">Contact</p>
		<p>(+66) 83-292-2652</p>
	</div>
	<div id="footer-link">
		<a href="mailto:vatsapon21@hotmail.com"><img class="footer-link-icon btn" src="images/email-icon.webp"></img></a>
		<a href="https://www.linkedin.com/in/vatsapon/" target="_blank"><img class="footer-link-icon btn" src="images/linkedin-icon.webp"></img></a>
	</div>
	<div id="footer-copyright">
		<p class="p-highlight">&#169; 2023 by Vatsapon Asawakittiporn</p>
		<p>Host provided by GitHub pages</p>
	</div>`

// Scroll Event Handler

let generalPrevScroll = window.scrollY;

window.addEventListener('scroll', () => {
	const currentScrollPos = window.scrollY;
	
	const headerElement = document.getElementById('header');
	const headerHeightString = getComputedStyle(headerElement).height;
	const headerHeight = parseInt(headerHeightString, 10);
	
	const scrollToTopElement = document.getElementById('scroll-to-top');
	
	// Scroll up.
	if (generalPrevScroll > currentScrollPos &&
		currentScrollPos <= headerHeight) {

		headerElement.style.top = '0px';
	}
	
	// Scroll down.
	if (generalPrevScroll < currentScrollPos &&
		currentScrollPos > headerHeight) {
			
		headerElement.style.top = `-${headerHeightString}`;
	}
	
	if (currentScrollPos > window.outerHeight) {
		scrollToTopElement.classList.remove('scroll-to-top-hide');
	} else {
		scrollToTopElement.classList.add('scroll-to-top-hide');
	}
	
	generalPrevScroll = currentScrollPos;
});

function loadDesktop() {
	
}

function loadMobile() {
	
}

function scrollToTop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}