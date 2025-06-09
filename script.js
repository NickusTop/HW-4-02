const inputRange = document.querySelector('.slider__input');
const sliderImg = document.querySelector('.slider__image');

inputRange.addEventListener('input', _.debounce(function() {
    const value = inputRange.value;
    sliderImg.style.width = `${value}px`;

}, 100));

