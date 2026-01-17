function triggerArrival(carouselNum, city) {
    const alertBanner = document.getElementById('arrival-alert');
    const baggageBox = document.getElementById('carousel-display');
    const scrollWindow = document.getElementById('travel-guides');
    const baggageText = document.getElementById('baggage-text');
    const booking = document.getElementById('booking-link');
    const trip = document.getElementById('trip-link');
    // ADD THIS LINE: It finds the button inside the baggage box
    const baggageTrip = document.getElementById('baggage-trip-link');

    if (city === 'HK') {
        booking.innerText = "View Hong Kong Hotels (Booking.com)";
        trip.innerText = "Find Hong Kong Flights (Trip.com)";
        // UPDATE THE THIRD BUTTON
        if (baggageTrip) { baggageTrip.innerText = "Find Hong Kong Flights (Trip.com)"; }
    } else {
        booking.innerText = "View Paris Hotels (Booking.com)";
        trip.innerText = "Find Paris Flights (Trip.com)";
        // RESET THE THIRD BUTTON
        if (baggageTrip) { baggageTrip.innerText = "Find Paris Flights (Trip.com)"; }
    }

    if (baggageText && alertBanner && baggageBox) {
        baggageText.innerText = "CAROUSEL " + carouselNum;
        alertBanner.style.display = 'block';
        baggageBox.style.display = 'block';
        setTimeout(() => {
            if (scrollWindow) { scrollWindow.scrollTo({ top: scrollWindow.scrollHeight, behavior: 'smooth' }); }
        }, 500);
    }
}


