
// Setup layout based on device's browser

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	loadMobile();
} else {
	loadDesktop();
}

// Scroll Event Handler

var prevScrollpos = window.pageYOffset;
const parallaxForce = 0.5;

window.onscroll = function() {
	const currentScrollPos = window.pageYOffset;
	const headerElement = document.getElementById("main-header");
	const headerHeightString = getComputedStyle(headerElement).height;
	const headerHeight = parseInt(headerHeightString, 10);
	
	const introElement = document.getElementById("intro-section-video");
	const introTop = currentScrollPos * parallaxForce;
	
	// Scroll up.
	if (prevScrollpos > currentScrollPos) {
		introElement.style.top = introTop + "px";
		
		if (currentScrollPos <= headerHeight) {
			headerElement.style.top = "0px";
		}
	}
	
	// Scroll down.
	if (prevScrollpos < currentScrollPos) {
		introElement.style.top = introTop + "px";
		
		if (currentScrollPos > headerHeight) {
			headerElement.style.top = "-" + headerHeightString;
		}
	}
	
	prevScrollpos = currentScrollPos;
}

function loadDesktop() {
	
}

function loadMobile() {
	
}

