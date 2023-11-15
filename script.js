// Array of predetermined messages
const messages = [
    "Ahoj!",
    "Tanec je bezva!",
    "Ne, nevypadáš jako blázen, když tančíš.",
    "Další náhodná zpráva",
    "Jitu, pošli mi nějaký text.",
    "Neboj, všechno dobře dopadne."
];

// Function to generate and display a random message
function generateMessage() {
    // Get a random index from the messages array
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // Display the selected message
    document.getElementById('message').textContent = messages[randomIndex];
}
