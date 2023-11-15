// Array of predetermined messages
const messages = [
    "Hello, World!",
    "Welcome to my website!",
    "Have a great day!",
    "This is a random message.",
    "Click the button for more messages."
];

// Function to generate and display a random message
function generateMessage() {
    // Get a random index from the messages array
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // Display the selected message
    document.getElementById('message').textContent = messages[randomIndex];
}
