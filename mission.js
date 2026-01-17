function triggerArrival(carouselNum, city) {
    const alertBanner = document.getElementById('arrival-alert');
    const baggageBox = document.getElementById('carousel-display');
    const scrollWindow = document.getElementById('travel-guides');
    const baggageText = document.getElementById('baggage-text');
    const booking = document.getElementById('booking-link');
    const trip = document.getElementById('trip-link');

    // 1. Marketplace Intelligence Swap
    if (city === 'HK') {
        booking.href = "https://www.booking.com/searchresults.html?ss=Hong+Kong";
        booking.innerText = "View Hong Kong Hotels (Booking.com)";
        trip.href = "https://www.trip.com/flights/list?searchtype=1&acity=hkg";
        trip.innerText = "Find Hong Kong Flights (Trip.com)";
    } else {
        // Defaults to Paris for Europe
        booking.href = "https://www.booking.com/searchresults.html?ss=Paris";
        booking.innerText = "View Paris Hotels (Booking.com)";
        trip.href = "https://www.trip.com/flights/list?searchtype=1&acity=par";
        trip.innerText = "Find Paris Flights (Trip.com)";
    }

    // 2. Baggage Intelligence Reveal (Works for both HK and Paris)
    if (baggageText && alertBanner && baggageBox) {
        baggageText.innerText = "CAROUSEL " + carouselNum;
        alertBanner.style.display = 'block';
        baggageBox.style.display = 'block';

        // 3. Zero-Input Auto-Scroll
        setTimeout(() => {
            if (scrollWindow) {
                scrollWindow.scrollTo({ top: scrollWindow.scrollHeight, behavior: 'smooth' });
            }
        }, 500);
    }
}


