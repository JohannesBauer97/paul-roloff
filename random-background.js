// Function to set a random background on page load
function setRandomBackground() {
    // Generate a random number between 0 and 19
    const randomNumber = Math.floor(Math.random() * 20);
    // Construct the background image path
    const backgroundImagePath = `/assets/backgrounds/background-${randomNumber}.webp`;
    // Set the background image on the body element
    document.body.style.backgroundImage = `url("${backgroundImagePath}")`;
}

// Call the function when the script is loaded
setRandomBackground();
