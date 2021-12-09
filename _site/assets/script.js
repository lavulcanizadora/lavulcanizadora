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

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

const openMenu = () => {
	if (!menuOpen.classList.contains("menu-open-hidden")) {
		menuOpen.classList.add("menu-open-hidden");
		menuClose.classList.remove("menu-close-hidden");
		nav.classList.add("nav-visible");
		body.classList.add("body-lock");
	}
};

const closeMenu = () => {
	if (!menuClose.classList.contains("menu-close-hidden")) {
		menuOpen.classList.remove("menu-open-hidden");
		menuClose.classList.add("menu-close-hidden");
		nav.classList.remove("nav-visible");
		body.classList.remove("body-lock");
	}
};

menuOpen.addEventListener("click", () => {
	openMenu();
});

menuClose.addEventListener("click", () => {
	closeMenu();
});

$(document).ready(function () {
	$(".slick-carousel").slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
	});

	const leftArrow = document.querySelector(".left-arrow");
	const rightArrow = document.querySelector(".right-arrow");

	if (leftArrow) {
		leftArrow.addEventListener("click", () => {
			$(".slick-carousel").slick("slickPrev");
		});
		rightArrow.addEventListener("click", () => {
			$(".slick-carousel").slick("slickNext");
		});
	}

	const projectImagesContainer = document.querySelector(".project-images-container");
	projectImagesContainer.addEventListener("click", (event) => {
		if (
			event.target != leftArrow &&
			!event.target.classList.contains("project-video-element") &&
			!event.target.classList.contains("slick-dots")
		) {
			$(".slick-carousel").slick("slickNext");
			console.log(event.target);
		}
	});
});

const setVideosHeight = () => {
	const projectVideoElements = document.getElementsByClassName("project-video-element");
	const projectImageElement = document.querySelector(".project-image-element");
	let newVideoHeight = projectImageElement.getBoundingClientRect().height;
	for (let i = 0; i < projectVideoElements.length; i++) {
		projectVideoElements[i].style.height = newVideoHeight + "px";
	}
};

$(".slick-carousel").on("init", function () {
	setTimeout(() => {
		setVideosHeight();
	}, 500);
});
