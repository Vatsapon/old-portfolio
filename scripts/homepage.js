import * as homeProject from '../datas/home-project.js';

var prevScrollpos = window.pageYOffset;
const parallaxForce = 0.5;

// Load Project data
homeProject.loadProjectInfo(homeProject.personalProjectInfo, '.js-project-grid-personal');
homeProject.loadProjectInfo(homeProject.professionalProjectInfo, '.js-project-grid-professional');

// Parallax video background
window.addEventListener('scroll', () => {
	const currentScrollPos = window.pageYOffset;
	
	const introElement = document.getElementById('intro-section-video');
	const introTop = currentScrollPos * parallaxForce;
	
	// Scroll up.
	if (prevScrollpos > currentScrollPos) {
		introElement.style.top = `${introTop}px`;
	}
	
	// Scroll down.
	if (prevScrollpos < currentScrollPos) {
		introElement.style.top = `${introTop}px`;
	}
	
	prevScrollpos = currentScrollPos;
});