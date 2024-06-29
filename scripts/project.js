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

	// Index less, loop back to element's length.
	if (galleryData.index < 0) {
		galleryData.index = galleryElement.length - 1;
	}

	// Index exceed length, loop back to first.
	if (galleryData.index > galleryElement.length - 1) {
		galleryData.index = 0;
	}
	
	// Set all display to none, except selected index.
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

function closeIMGPreview() {
	const imgPreviewElement = document.getElementById('img-preview');
	imgPreviewElement.style.display = 'none';
}

function openIMGPreview(source, name, description) {
	const imgPreviewElement = document.getElementById('img-preview');
	const imgDisplayElement = document.getElementById('img-preview-display');
	const imgNameElement = document.getElementById('img-preview-name');
	const imgDescriptionElement = document.getElementById('img-preview-desc');
	
	imgDisplayElement.src = source;
	imgPreviewElement.style.display = 'block';
	imgNameElement.innerHTML = name;
	imgDescriptionElement.innerHTML = description;
}