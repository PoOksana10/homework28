document.addEventListener("DOMContentLoaded", function () {
    setSlideInterval();
});

document.addEventListener('click', (e) => {
    const target = e.target;
    const intervalId = intervalIds.find(id => id.name === 'slideInterval');
    if (target) {
        target.classList.remove('active');
        clearInterval(intervalId.intervalId);
        if (target.classList.contains('next')) {
            next();
        } else if (target.classList.contains('prev')) {
            prev();
        }
    }
});












