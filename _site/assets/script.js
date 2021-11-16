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
	var bottomMenu = document.getElementsByClassName("bottom-menu-wrapper");
	bottomMenu[0].classList.add("slide-in-bottom");
	bottomMenu[0].classList.remove("bottom-menu-hidden");
}
