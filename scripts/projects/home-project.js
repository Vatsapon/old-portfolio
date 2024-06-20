const personalProjectInfo = ['merrit', 'lilyParty', 'finalFrontier', 'mythicalLove', 'slimeJourney', 'grotto'];
const professionalProjectInfo = ['lostNfound'];

// Main Execution

loadProjectInfo(personalProjectInfo, '.js-project-grid-personal');
loadProjectInfo(professionalProjectInfo, '.js-project-grid-professional');

// Functions

function loadProjectInfo(infoArray, queryName) {
	let projectHTML = '';

	infoArray.forEach((project) => {
		projectHTML += `
			<a href="${project}.html" class="project-grid-container">
				<img class="project-grid-container-content-preview" src="videos/projects/${project}/${project}-poster-preview.gif"></img>
				<img class="project-grid-container-content" src="videos/projects/${project}/${project}-poster.png"></img>
			</a>`;
	})

	document.querySelector(queryName).innerHTML = projectHTML;
}