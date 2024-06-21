
// Setup layout based on device's browser

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	loadMobile();
} else {
	loadDesktop();
}

// Initialization Header/Footer
document.getElementById("header").innerHTML =
	`<div id="header-name">
		<p class="p-highlight" style="font-size: 27px">VATSAPON ASAWAKITTIPORN</p>
		<p style="font-size: 24px">Game Developer / Programmer</p>
	</div>
	<div id="header-nav">
		<a href="home.html" class="header-nav-btn">HOME</a>
		<div id="header-nav-proj">
			<a id="proj" class="header-nav-btn">PROJECTS <i class="fa fa-caret-down"></i></a>
			<div id="proj-content">
				<a class="proj-item">Merrit</a>
				<a class="proj-item">Lily Party</a>
				<a class="proj-item">Final Frontier</a>
				<a class="proj-item">Mythical Love</a>
				<a class="proj-item">Slime Journey</a>
				<a class="proj-item">Lost & Found Co.</a>
			</div>
		</div>
		<a href="about.html" class="header-nav-btn">ABOUT</a>
		<a href="https://drive.google.com/file/d/1GojvCwZEUEFXQjEGFkxs2UiNSt_9K7im/view?usp=sharing" target="_blank" class="header-nav-btn">RESUME</a>
	</div>
	<div style="
		background-color: var(--baseColor);
		height: 150px;">
	</div>`;
	
document.getElementById("footer").innerHTML =
	`<div id="footer-contact">
		<p class="p-highlight">Contact</p>
		<p>(+66) 83-292-2652</p>
	</div>
	<div id="footer-link">
		<a href="mailto:vatsapon21@hotmail.com"><img class="footer-link-icon" src="images/email-icon.webp"></img></a>
		<a href="https://www.linkedin.com/in/vatsapon/" target="_blank"><img class="footer-link-icon" src="images/linkedin-icon.webp"></img></a>
	</div>
	<div id="footer-copyright">
		<p class="p-highlight">&#169; 2023 by Vatsapon Asawakittiporn</p>
		<p>Host provided by GitHub pages</p>
	</div>`

// Scroll Event Handler

var prevScrollpos = window.pageYOffset;
const parallaxForce = 0.5;

window.addEventListener('scroll', () => {
	const currentScrollPos = window.pageYOffset;
	
	const headerElement = document.getElementById('header');
	const headerHeightString = getComputedStyle(headerElement).height;
	const headerHeight = parseInt(headerHeightString, 10);
	
	// Scroll up.
	if (prevScrollpos > currentScrollPos &&
		currentScrollPos <= headerHeight) {

		headerElement.style.top = '0px';
	}
	
	// Scroll down.
	if (prevScrollpos < currentScrollPos &&
		currentScrollPos > headerHeight) {
		headerElement.style.top = `-${headerHeightString}`;
	}
	
	prevScrollpos = currentScrollPos;
});

function loadDesktop() {
	
}

function loadMobile() {
	
}

