document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".stages__box");
    const slides = document.querySelectorAll(".stages__card");
    const prevButton = document.querySelector(".stages__arrow_prev");
    const nextButton = document.querySelector(".stages__arrow_next");
    const dotsContainer = document.querySelector(".stages__dots");

    let slideIndex = 0;

    // Создание индикаторов слайдов (точек)
    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("stages__dot");
        if (index === 0) {
            dot.classList.add("active");
        }
        dot.addEventListener("click", () => moveToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Перемещение карусели на нужный слайд
    function moveToSlide(index) {
        const slideWidth = slides[0].clientWidth;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        slideIndex = index;

        // Обновление состояния индикаторов слайдов
        updateDots();
        updateButtons();
    }

    // Обновление состояния индикаторов слайдов
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

    // Обновление состояния кнопок "предыдущий" и "следующий"
    function updateButtons() {
        prevButton.disabled = slideIndex === 0;
        nextButton.disabled = slideIndex === slides.length - 1;
    }

    // Обработчик нажатия на кнопку "следующий"
    nextButton.addEventListener("click", () => {
        if (slideIndex < slides.length - 1) {
            moveToSlide(slideIndex + 1);
        }
    });

    // Обработчик нажатия на кнопку "предыдущий"
    prevButton.addEventListener("click", () => {
        if (slideIndex > 0) {
            moveToSlide(slideIndex - 1);
        }
    });

    // Инициализация
    updateButtons();
});