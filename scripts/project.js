var galleryRuntimeDatas = [];
const galleryInterval = 3;

setupIntro();
setupGallery();

// Setup intro.
function setupIntro() {
	const projectSectionElement = document.getElementById('proj-section');
	const projectSummarySectionElement = document.getElementById('proj-summary-section');
	
	projectSectionElement.innerHTML = `
		<img class="parallax-img" src="${infoData.bgRef}">
		
		<div class="proj-content">
			<p class="p-highlight" style="font-size: 220%">${infoData.name}</p>
			<p class="p-bold" style="font-size: 120%">${infoData.info.type} <span style="color: var(--highlight-color)">|</span> ${infoData.info.role} <span style="color: var(--highlight-color)">|</span> ${infoData.info.date}</p>
			<p style="margin: 20px 0">${infoData.description}</p>
			<div class="demo-download">
				<a class="demo-btn btn" href="${infoData.downloadRef}" target="_blank">
					<i class="fa fa-download"></i> &nbsp; ${infoData.downloadLabel}
				</a>
				<div>
					<p style="
						display: inline;
						margin-right: 10px;
						vertical-align: middle;">Made with</p>
					<a href="https://unity.com/" target="_blank"><img class="unity-icon btn" src="images/unity-icon.png" alt="Unity's Logo"></a>
				</div>
			</div>
		</div>
			
		<div class="section-split-right" style="--color: ${colorData.firstColor}"></div>`;
		
	projectSummarySectionElement.style.setProperty('--bg-color1', colorData.firstColor);
	projectSummarySectionElement.style.setProperty('--bg-color2', colorData.secondColor);
}

// Setup gallery.
function setupGallery() {
	const galleries = document.getElementsByClassName('gallery');
	
	for (let i = 0; i < galleries.length; i++) {
		const galleryID = galleries[i].id;
		const galleryData = getGalleryDataFromID(galleryID);
		
		// Load from data.
		for (let j = 0; j < galleryData.gallery.length; j++) {
			const galleryDataContent = galleryData.gallery[j];
			galleries[i].innerHTML += `
			<button class="gallery-content" onclick="setGalleryPreview('${galleryID}', ${j})">
				<img src="${galleryDataContent.source}" alt="${galleryDataContent.name}">
			</button>`;
		}
		
		galleries[i].innerHTML += `
			<button class="prev-btn btn" onclick="prevSlide('${galleryID}')"><i class="fa fa-angle-left"></i></button>
			<button class="next-btn btn" onclick="nextSlide('${galleryID}')"><i class="fa fa-angle-right"></i></button>`;
		
		setSlide(galleryID, 0);
	}
	
	setInterval(() => {
		for (let i = 0; i < galleries.length; i++) {
			nextSlide(galleries[i].id)
		}
	}, galleryInterval * 1000);
}

function setSlide(elementID, index) {
	const galleryData = getGalleryDataFromID(elementID);
	
	if (!galleryData) return;
	
	const galleryElement = document.getElementById(elementID).getElementsByClassName("gallery-content");

	if (galleryData.index < 0) galleryData.index = galleryElement.length - 1;

	if (galleryData.index > galleryElement.length - 1) galleryData.index = 0;
	
	for (let i = 0; i < galleryElement.length; i++) {
		if (i == galleryData.index) {
			galleryElement[i].style.animation = 'fadeInBlock 0.5s ease'
			galleryElement[i].style.display = 'block';
		} else if (galleryElement[i].style.display === 'block') {
			galleryElement[i].style.animation = 'fadeOutBlock 0.5s ease'
			galleryElement[i].style.display = 'none';
		}
	}
}

function prevSlide(elementID) {
	const galleryData = getGalleryDataFromID(elementID);
	if (!galleryData) return;
	
	setSlide(elementID, galleryData.index--);
}

function nextSlide(elementID) {
	const galleryData = getGalleryDataFromID(elementID);
	if (!galleryData) return;
	
	setSlide(elementID, galleryData.index++);
}

function getGalleryDataFromID(galleryID) {
	for (let i = 0; i < galleryDatas.length; i++) {
		if (galleryDatas[i].id == galleryID) {
			return galleryDatas[i];
		}
	}
	
	return null;
}

var previewDatas = [];
var previewIndex = 0;

// Image Preview.

function nextPreview() {
	previewIndex++;
	showPreview();
}

function prevPreview() {
	previewIndex--;
	showPreview();
}

function showPreview() {
	
	if (previewIndex < 0) previewIndex = previewDatas.length - 1;
	
	if (previewIndex > previewDatas.length - 1) previewIndex = 0;
	
	const previewData = previewDatas[previewIndex];
	
	const imgPreviewElement = document.getElementById('img-preview');
	const imgDisplayElement = document.getElementById('img-preview-display');
	const imgNameElement = document.getElementById('img-preview-name');
	const imgDescriptionElement = document.getElementById('img-preview-desc');
	
	imgPreviewElement.style.animation = 'fadeInBlock 0.2s ease';
	
	imgDisplayElement.src = previewData.source;
	imgPreviewElement.style.display = 'block';
	imgNameElement.innerHTML = previewData.name;
	imgDescriptionElement.innerHTML = previewData.description;
}

function closePreview() {
	previewDatas = [];
	previewIndex = 0;
	
	const imgPreviewElement = document.getElementById('img-preview');
	
	imgPreviewElement.style.animation = 'fadeOutBlock 0.2s ease';
	imgPreviewElement.style.display = 'none';
}

function setIMGPreview(source, name, description) {
	
	// If there's image previewing, cancel.
	if (previewDatas.length > 0) return;
	
	previewIndex = 0;
	
	let imgPreview = {
		source: source,
		name: name,
		description: description,
	}
	
	const imgPreviewElement = document.getElementById('img-preview');
	const prevButtonElement = imgPreviewElement.getElementsByClassName('prev-btn');
	const nextButtonElement = imgPreviewElement.getElementsByClassName('next-btn');
	
	prevButtonElement[0].style.display = 'none';
	nextButtonElement[0].style.display = 'none';
	
	previewDatas[0] = imgPreview;
	showPreview();
}

function setGalleryPreview(galleryID, index) {
	// If there's image previewing, cancel.
	if (previewDatas.length > 0) return;
	
	const galleryData = getGalleryDataFromID(galleryID);
	
	if (!galleryData) return;
	
	const galleryElement = document.getElementById(galleryID).getElementsByClassName('gallery-content');

	for (var i = 0; i < galleryElement.length; i++) {
		var imgData = galleryElement[i].getElementsByTagName('img')[0];
		var galleryDataContent = galleryData.gallery[i];
		
		previewDatas[i] = {
			source: galleryDataContent.source,
			name: galleryDataContent.name,
			description: galleryDataContent.description,
		}
	}

	previewIndex = index;
	
	if (galleryElement.length > 1) {
		const imgPreviewElement = document.getElementById('img-preview');
		const prevButtonElement = imgPreviewElement.getElementsByClassName('prev-btn');
		const nextButtonElement = imgPreviewElement.getElementsByClassName('next-btn');
		
		prevButtonElement[0].style.display = 'block';
		nextButtonElement[0].style.display = 'block';
	}
	
	showPreview();
}