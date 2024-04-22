let i = 0;

function prev() {
    if (i <= 0) {
        i = images.length;
    }
    i--;
    continueSlides('prev');
    return setImg();
}

function next() {
    if (i >= images.length - 1) {
        i = -1;
    }
    i++;
    continueSlides('next');
    return setImg();
}

function setImg() {
    let slider_img = document.querySelector('.slider-img');
    return slider_img.setAttribute('src', 'images/' + images[i]);
}

function setSlideInterval() {
    document.querySelector('.next').classList.add('active');
    const intervalId = setInterval(next, 3000);
    const interval = intervalIds.find(element => element.name === 'slideInterval');
    if (!interval) {
        intervalIds.push({'name': 'slideInterval', 'intervalId': intervalId,});
    }
}

function continueSlides(classname) {
    if (!document.querySelector(`.${classname}`).classList.contains('active')) {
        intervalIds = [];
        setSlideInterval();
    }
}

