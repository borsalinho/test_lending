document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".users__carusel");
    const slides = document.querySelectorAll(".users__card");
    const prevBtn = document.querySelector(".users__arrow--prev");
    const nextBtn = document.querySelector(".users__arrow--next");
    const counter = document.querySelector(".users__counter");
    const slideWidth = slides[0].clientWidth;
    const visibleSlides = Math.min(3, slides.length);
    let currentIndex = 0;
    let totalSlides = slides.length;

    function updateCounter() {
        const start = currentIndex + 1;
        counter.textContent = `${start}/${totalSlides}`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
        updateCounter();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
        updateCounter();
    }

    function updateSlide() {
        container.style.transition = "transform 0.3s ease";
        container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function handleResize() {
        slideWidth = slides[0].clientWidth;
        visibleSlides = Math.min(3, Math.floor(container.clientWidth / slideWidth));
        updateSlide();
        updateCounter();
    }

    window.addEventListener("resize", handleResize);

    setInterval(nextSlide, 4000);

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    updateCounter();
    handleResize();
});