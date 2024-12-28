const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// After Loading DOM content, display the first image of the slider
document.addEventListener("DOMContentLoaded", initialiseSlider);

function initialiseSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0; // Reset to the first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Reset to the last slide
    } else {
        slideIndex = index; // Update to the given index
    }
    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId); // Stop auto-sliding when manually navigating
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000); // Restart auto-sliding
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
