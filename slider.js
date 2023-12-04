const slider = document.getElementById('slider');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderhidden = document.querySelectorAll('.hidden');
// console.log(sliderhidden.length)
let currentIndex = 0;
let intervalId;

const isMobile = window.innerWidth <= 640;

function showSlide(index) {
    if (isMobile) {
        const newPosition = -index * 80;
        slider.style.transform = `translateX(${newPosition}vw)`;
    }
    else {
        const newPosition = -index * 600;
        slider.style.transform = `translateX(${newPosition}px)`;
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
    restartInterval();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
    restartInterval();
}

// setInterval(nextSlide, 3000);

function restartInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000); // Adjust the interval as needed
}
restartInterval();


document.getElementById('prev-btn').addEventListener('click', prevSlide);
document.getElementById('next-btn').addEventListener('click', nextSlide);

