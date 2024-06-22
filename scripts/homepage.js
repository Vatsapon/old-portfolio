const parallaxForce = 0.5;

// Load Project data
loadProjectInfo(personalProjectInfo, '.js-project-grid-personal');
loadProjectInfo(professionalProjectInfo, '.js-project-grid-professional');

let homePrevScroll = window.scrollY;

// Parallax video background
window.addEventListener('scroll', () => {
	const currentScrollPos = window.scrollY;
	
	const introElement = document.getElementById('intro-section-video');
	const introTop = currentScrollPos * parallaxForce;
	
	// Scroll up.
	if (homePrevScroll > currentScrollPos) {
		introElement.style.top = `${introTop}px`;
	}
	
	// Scroll down.
	if (homePrevScroll < currentScrollPos) {
		introElement.style.top = `${introTop}px`;
	}
	
	homepagePrevScroll = currentScrollPos;
});