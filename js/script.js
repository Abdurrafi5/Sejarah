const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".gallery-item img").forEach((image) => {
	image.onclick = () => {
		lightbox.style.display = "flex";
		lightboxImg.src = image.src;
		let figcaption = image.parentElement.querySelector("figcaption");
		if (figcaption) {
			captionText.innerHTML = figcaption.innerHTML;
		}
	};
});

closeBtn.onclick = () => {
	lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
	if (e.target === lightbox) {
		lightbox.style.display = "none";
	}
};

// Navbar toggle for mobile
const hamburger = document.getElementById("hamburger");
const navGroup = document.querySelector(".nav-group");

hamburger.addEventListener("click", () => {
	navGroup.classList.toggle("nav-active");
	hamburger.classList.toggle("active");
});

// Hero section animation on scroll
const heroSection = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate");
			}
		});
	},
	{ threshold: 0.2 },
);

observer.observe(heroSection);

// Scroll animations for content cards and gallery categories
const cards = document.querySelectorAll(".content-card");
const categories = document.querySelectorAll(".gallery-category");
cards.forEach((card, index) => {
    if (index % 2 === 0) {
        card.classList.add("slide-in-left");
    } else {
        card.classList.add("slide-in-right");
    }
    observer.observe(card);
});

document.querySelectorAll(".fade-in, .content-card").forEach((el) => {
    observer.observe(el);
});