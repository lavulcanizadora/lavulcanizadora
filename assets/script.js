if (document.getElementsByClassName("cover-video").length != 0) {
	let currentVideo = Math.floor(Math.random() * 3);
	let prevVideo = Math.floor(Math.random() * 3);
	let coverVideos = document.getElementsByClassName("cover-video");
	randomVideo();

	function randomVideo() {
		while (currentVideo == prevVideo) {
			currentVideo = Math.floor(Math.random() * 3);
		}
		if (coverVideos[prevVideo] != null) {
			coverVideos[prevVideo].classList.remove("cover-video-visible");
		}
		prevVideo = currentVideo;
		coverVideos[currentVideo].classList.add("cover-video-visible");

		setTimeout(function () {
			randomVideo();
		}, 5000);
	}
}

if (document.getElementsByClassName("start-logo-title-element").length != 0) {
	let logoTitle = document.getElementsByClassName("start-logo-title-element");
	logoTitle[0].addEventListener("click", displayMenu);
}
function displayMenu() {
	let bottomMenu = document.getElementsByClassName("bottom-menu-wrapper");
	bottomMenu[0].classList.add("slide-in-bottom");
	bottomMenu[0].classList.remove("bottom-menu-hidden");
}

if (document.getElementsByClassName("cover-image").length != 0) {
	let currentImg = 0;
	let prevImg = null;
	let imgElements = document.getElementsByClassName("cover-image");
	seqStep();

	function seqStep() {
		if (prevImg != null) {
			imgElements[prevImg].classList.remove("cover-image-visible");
		}
		prevImg = currentImg;
		imgElements[currentImg].classList.add("cover-image-visible");
		currentImg++;
		if (currentImg >= imgElements.length) {
			currentImg = 0;
		}
		setTimeout(function () {
			seqStep();
		}, 10000);
	}
}
