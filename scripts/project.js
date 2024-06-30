var galleryDatas = [];
const galleryInterval = 3;

setUp();

// Set up gallery.
function setUp() {
	const galleries = document.getElementsByClassName('gallery');
	
	for (let i = 0; i < galleries.length; i++) {
		const galleryID = galleries[i].id;
		setSlide(galleryID, 0);
		
		galleryDatas[i] = {
			id: galleryID,
			index: 0,
		}
		
		// Add Preview button event.
		let galleryContents = galleries[i].getElementsByClassName('gallery-content');
		
		for (let j = 0; j < galleryContents.length; j++) {
			galleryContents[j].addEventListener('click', () => {
				setGalleryPreview(galleryID, j);
			});
		}
	}
	
	setInterval(() => {
		for (let i = 0; i < galleries.length; i++) {
			nextSlide(galleries[i].id)
		}
	}, galleryInterval * 1000);
}

function setSlide(elementID, index) {
	const galleryData = getGalleryFromID(elementID);
	
	if (!galleryData) return;
	
	const galleryElement = document.getElementById(elementID).getElementsByClassName("gallery-content");

	if (galleryData.index < 0) galleryData.index = galleryElement.length - 1;

	if (galleryData.index > galleryElement.length - 1) galleryData.index = 0;
	
	for (let i = 0; i < galleryElement.length; i++) {
		galleryElement[i].style.display = i=== galleryData.index ? 'block' : 'none';
	}
}

function prevSlide(elementID) {
	const galleryData = getGalleryFromID(elementID);
	if (!galleryData) return;
	
	setSlide(elementID, galleryData.index--);
}

function nextSlide(elementID) {
	const galleryData = getGalleryFromID(elementID);
	if (!galleryData) return;
	
	setSlide(elementID, galleryData.index++);
}

function getGalleryFromID(galleryID) {
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
	
	imgDisplayElement.src = previewData.source;
	imgPreviewElement.style.display = 'block';
	imgNameElement.innerHTML = previewData.name;
	imgDescriptionElement.innerHTML = previewData.description;
}

function closePreview() {
	previewDatas = [];
	previewIndex = 0;
	
	const imgPreviewElement = document.getElementById('img-preview');
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
	
	const galleryData = getGalleryFromID(galleryID);
	
	if (!galleryData) return;
	
	const galleryElement = document.getElementById(galleryID).getElementsByClassName('gallery-content');

	for (var i = 0; i < galleryElement.length; i++) {
		var imgData = galleryElement[i].getElementsByTagName('img')[0];
		
		previewDatas[i] = {
			source: imgData.src,
			name: imgData.alt,
			description: '',
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