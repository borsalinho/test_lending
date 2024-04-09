document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".stages__box");
    const slides = document.querySelectorAll(".stages__card");
    const prevButton = document.querySelector(".stages__arrow_prev");
    const nextButton = document.querySelector(".stages__arrow_next");
    const dotsContainer = document.querySelector(".stages__dots");

    let slideIndex = 0;

    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("stages__dot");
        if (index === 0) {
            dot.classList.add("active");
        }
        dot.addEventListener("click", () => moveToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function moveToSlide(index) {
        const slideWidth = slides[0].clientWidth;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        slideIndex = index;

        updateDots();
        updateButtons();
    }

    function updateDots() {
        const dots = document.querySelectorAll(".stages__dot");
        dots.forEach((dot, index) => {
            if (index === slideIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    function updateButtons() {
        prevButton.disabled = slideIndex === 0;
        nextButton.disabled = slideIndex === slides.length - 1;
    }

    nextButton.addEventListener("click", () => {
        if (slideIndex < slides.length - 1) {
            moveToSlide(slideIndex + 1);
        }
    });

    prevButton.addEventListener("click", () => {
        if (slideIndex > 0) {
            moveToSlide(slideIndex - 1);
        }
    });

    updateButtons();
});