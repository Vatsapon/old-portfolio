// Initialization Header/Footer

document.getElementById("header").innerHTML =
	`<div id="header-title">
		<p class="p-highlight">VATSAPON ASAWAKITTIPORN</p>
		<p style="font-size: 80%">Game Developer / Programmer</p>
	</div>
	
	<input id="header-side-menu" type="checkbox">
	<label id="header-hamb" for="header-side-menu">
		<span class="header-hamb-line"></span>
	</label>
	
	<nav id="header-nav">
		<ul id="header-menu">
			<li><a href="home.html" class="header-nav-btn btn">HOME</a></li>
			<li class="header-menu-proj">
				<p class="header-menu-proj-btn header-nav-btn">PROJECTS <i class="fa fa-caret-down"></i></p>
				<div class="header-menu-proj-content">
					<a href="merrit.html">Merrit</a>
					<a href="lilyparty.html">Lily Party</a>
					<a href="finalfrontier.html">Final Frontier</a>
					<a href="mythicallove.html">Mythical Love</a>
					<a href="slimejourney.html">Slime Journey</a>
					<a href="grotto.html">Grotto</a>
					<a href="lostNfound.html">Lost & Found Co.</a>
				</div>
			</li>
			<li><a href="about.html" class="header-nav-btn btn">ABOUT</a></li>
			<li><a href="https://drive.google.com/file/d/1GojvCwZEUEFXQjEGFkxs2UiNSt_9K7im/view?usp=sharing" target="_blank" class="header-nav-btn btn">RESUME</a></li>
		</ul>
	</nav>`;

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
		<p class="p-highlight">&#169; 2024 by Vatsapon Asawakittiporn</p>
		<p>Host provided by GitHub pages</p>
	</div>`

// Scroll Event Handler

const parallaxForce = 0.5;
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
	
	if (scrollToTopElement !== null) {
		if (currentScrollPos > window.outerHeight) {
			scrollToTopElement.classList.remove('scroll-to-top-hide');
		} else {
			scrollToTopElement.classList.add('scroll-to-top-hide');
		}
	}
	generalPrevScroll = currentScrollPos;
});



// Parallax video background
window.addEventListener('scroll', () => {
	const currentScrollPos = window.scrollY;
	const introTop = currentScrollPos * parallaxForce;
	
	const parallaxElements = document.getElementsByClassName('parallax-img');
	
	for (var i = 0; i < parallaxElements.length; i++) {
		parallaxElements[i].style.top = `${introTop}px`;
	}
});

// Window Resize Listener

window.addEventListener('resize', checkScrollToTop);

checkScrollToTop();

function checkScrollToTop() {
	const width = window.innerWidth;
	const scrollToTopElement = document.getElementById('scroll-to-top');
	
	if (scrollToTopElement === null) return;
	
	if (width <= 768) {
		scrollToTopElement.innerHTML = '<i class="fa fa-chevron-up"></i>';
	} else {
		scrollToTopElement.innerHTML = '<i class="fa fa-chevron-circle-up"></i> Scroll to Top';
	}
}

function scrollToTop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}