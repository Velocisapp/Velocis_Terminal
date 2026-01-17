/**
 * VELOCIS™ MISSION CONTROL
 * Core intelligence for automated arrival missions.
 */

function triggerArrival(carouselNum, city) {
    const alertBanner = document.getElementById('arrival-alert');
    const baggageBox = document.getElementById('carousel-display');
    const scrollWindow = document.getElementById('travel-guides');
    const baggageText = document.getElementById('baggage-text');
    const booking = document.getElementById('booking-link');
    const trip = document.getElementById('trip-link');
    const baggageTrip = document.getElementById('baggage-trip-link');

    // 1. Marketplace Intelligence Swap
    if (city === 'HK') {
        if (booking) {
            booking.href = "https://www.booking.com/searchresults.html?ss=Hong+Kong";
            booking.innerText = "View Hong Kong Hotels (Booking.com)";
        }
        if (trip) {
            trip.href = "https://www.trip.com/flights/list?searchtype=1&acity=hkg";
            trip.innerText = "Find Hong Kong Flights (Trip.com)";
        }
        if (baggageTrip) {
            baggageTrip.href = "https://www.trip.com/flights/list?searchtype=1&acity=hkg";
            baggageTrip.innerText = "Find Hong Kong Flights (Trip.com)";
        }
    } else {
        // Defaults to Paris for Europe missions
        if (booking) {
            booking.href = "https://www.booking.com/searchresults.html?ss=Paris";
            booking.innerText = "View Paris Hotels (Booking.com)";
        }
        if (trip) {
            trip.href = "https://www.trip.com/flights/list?searchtype=1&acity=par";
            trip.innerText = "Find Paris Flights (Trip.com)";
        }
        if (baggageTrip) {
            baggageTrip.href = "https://www.trip.com/flights/list?searchtype=1&acity=par";
            baggageTrip.innerText = "Find Paris Flights (Trip.com)";
        }
    }

    // 2. Baggage Intelligence Reveal & Terminal Automation
    if (baggageText && alertBanner && baggageBox) {
        baggageText.innerText = "CAROUSEL " + carouselNum;
        alertBanner.style.display = 'block';
        baggageBox.style.display = 'block';

        // Zero-Input Auto-Scroll
        setTimeout(() => {
            if (scrollWindow) {
                scrollWindow.scrollTo({ top: scrollWindow.scrollHeight, behavior: 'smooth' });
            }
        }, 500);
    }
}

// 3. GPS SILENT LISTENER CONFIGURATION
// These coordinates must match the locations of our strategic ports
const GLOBAL_PORTS = [
    { name: 'Paris CDG', lat: 49.0097, lon: 2.5479, carousel: '12', city: 'Paris' },
    { name: 'Hong Kong HKG', lat: 22.3080, lon: 113.9185, carousel: '2', city: 'HK' }
];

/**
 * Automatically identifies the user's location and triggers the mission.
 */
function activateLocationIntelligence() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;

            GLOBAL_PORTS.forEach(port => {
                // Calculate if user is within the geofence (~3km)
                const distance = Math.sqrt(Math.pow(userLat - port.lat, 2) + Math.pow(userLon - port.lon, 2));
                
                if (distance < 0.03) {
                    console.log("VELOCIS Match Identified: " + port.name);
                    triggerArrival(port.carousel, port.city);
                }
            });
        }, (error) => {
            console.warn("Location permission denied. Running in manual mode.");
        });
    }
}

// 4. AUTO-TRIGGER ON LOAD
window.onload = activateLocationIntelligence;
