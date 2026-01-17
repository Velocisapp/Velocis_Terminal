function triggerArrival(carouselNum) {
    const alertBanner = document.getElementById('arrival-alert');
    const baggageBox = document.getElementById('carousel-display');
    const scrollWindow = document.getElementById('travel-guides');
    const baggageText = document.getElementById('baggage-text');

    if (baggageText) {
        baggageText.innerText = "CAROUSEL " + carouselNum;
        alertBanner.style.display = 'block';
        baggageBox.style.display = 'block';

        setTimeout(() => {
            if (scrollWindow) {
                scrollWindow.scrollTo({ top: scrollWindow.scrollHeight, behavior: 'smooth' });
            }
        }, 500);
    }
}

// TEST TRIGGER
setTimeout(() => { triggerArrival('9'); }, 3000);
