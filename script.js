const birthday = new Date(2022, 7, 30, 8, 29); // Paul's birthday
let ageFormat = 0; // Current age format
const ageUnits = ['year', 'month', 'day', 'hour', 'minute', 'second'];
const displayedAgeElement = document.getElementById('displayedAge');

function calculateAge(formatIndex) {
    const now = new Date();
    const diffInMs = now - birthday;

    switch (ageUnits[formatIndex]) {
        case 'year':
            return Math.floor(diffInMs / (365.25 * 24 * 60 * 60 * 1000)) + ' Jahre';
        case 'month':
            return Math.floor(diffInMs / (30.44 * 24 * 60 * 60 * 1000)) + ' Monate';
        case 'day':
            return Math.floor(diffInMs / (24 * 60 * 60 * 1000)) + ' Tage';
        case 'hour':
            return Math.floor(diffInMs / (60 * 60 * 1000)) + ' Stunden';
        case 'minute':
            return Math.floor(diffInMs / (60 * 1000)) + ' Minuten';
        case 'second':
            return Math.floor(diffInMs / 1000) + ' Sekunden';
    }
}

function updateDisplayedAge() {
    displayedAgeElement.textContent = calculateAge(ageFormat);
}

function switchAgeFormat() {
    ageFormat = (ageFormat + 1) % ageUnits.length;
    updateDisplayedAge();
}

// Update age every second
setInterval(updateDisplayedAge, 1000);
updateDisplayedAge(); // Initial display
