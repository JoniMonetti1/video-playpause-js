const sliderBtn = document.querySelector('.slider-button');

sliderBtn.addEventListener('click', function() {
    const slider = this.querySelector('.slider');
    const video = document.getElementById('background-video');

    if (this.classList.toggle('active')) {
        slider.style.transform = 'translateX(-200px)';
        video.play();
    } else {
        slider.style.transform = 'translateX(0)';
        video.pause();
    }
})