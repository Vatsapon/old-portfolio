
// Determine to use Desktop/Mobile layout.
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	loadMobile();
} else {
	loadDesktop();
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;
let topVal = 0;
const parallaxForce = 1;

window.onscroll = function() {
	const currentScrollPos = window.pageYOffset;
	let headerElement = document.getElementById("main-header");
	let introElement = document.getElementById("intro-section-video");
	
	// Scroll up.
	if (prevScrollpos > currentScrollPos) {
		topVal += parallaxForce;
		//introElement.style.top = topVal + "px";
		
		if (currentScrollPos <= 150) {
			headerElement.style.top = "0px";
		}
	}
	
	// Scroll down.
	if (prevScrollpos < currentScrollPos) {
		topVal -= parallaxForce;
		//introElement.style.top = topVal + "px";
		
		if (currentScrollPos > 150) {
			headerElement.style.top = "-150px";
		}
	}
	
	prevScrollpos = currentScrollPos;
}

function loadDesktop() {
	
}

function loadMobile() {
	
}

