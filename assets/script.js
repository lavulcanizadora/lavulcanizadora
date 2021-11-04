if (document.getElementsByClassName("cover-video").length != 0) {
	let currentVideo = Math.floor(Math.random() * 3);
	let prevVideo = currentVideo - 1;
	let coverVideos = document.getElementsByClassName("cover-video");
	randomVideo();

	function randomVideo() {
		while (currentVideo == prevVideo) {
			currentVideo = Math.floor(Math.random() * 3);
		}
		if (coverVideos[prevVideo] != null) {
			coverVideos[prevVideo].removeAttribute("id", "display");
		}
		prevVideo = currentVideo;
		coverVideos[currentVideo].setAttribute("id", "display");

		setTimeout(function () {
			randomVideo();
		}, 5000);
	}
}
