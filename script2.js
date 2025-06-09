const box = document.querySelector('#box');

box.addEventListener('click', function() {
    box.classList.toggle('active');
});
document.addEventListener('mousemove', _.debounce(function(e) {
    if (box.classList.contains('active')) {
        const x = e.clientX;
        box.style.left = `${x}px`;
    }
}, 10));