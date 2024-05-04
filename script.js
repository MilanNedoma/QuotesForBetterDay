// Arrays of messages for different time groups
const messages = {
    FridayAfternoon: [
        "Happy Friday afternoon!",
        "Let's kick off the weekend!",
        "Enjoy your Friday afternoon!"
    ],
    SaturdayMorning: [
        "Good morning! Happy Saturday!",
        "Hope you have a fantastic Saturday morning!",
        "It's a beautiful Saturday morning!"
    ],
    SaturdayAfternoon: [
        "Good afternoon! Enjoy your Saturday!",
        "Hope you're having a great Saturday afternoon!",
        "Make the most of your Saturday afternoon!"
    ],
    SundayMorning: [
        "Good morning! Happy Sunday!",
        "Wishing you a peaceful Sunday morning!",
        "Enjoy your Sunday morning!"
    ],
    SundayAfternoon: [
        "Good afternoon! Make the most of your Sunday!",
        "Hope you're having a relaxing Sunday afternoon!",
        "Enjoy the rest of your Sunday afternoon!"
    ]
};

// Function to get the current day and time
function getCurrentDayAndTime() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hourOfDay = now.getHours(); // 0-23
    return { dayOfWeek, hourOfDay };
}

// Function to generate and display a random message based on current time
function generateMessage() {
    const { dayOfWeek, hourOfDay } = getCurrentDayAndTime();

    let messageGroup;

    // Determine the appropriate message group based on the current day and time
    switch (dayOfWeek) {
        case 5: // Friday
            if (hourOfDay >= 12 && hourOfDay < 18) {
                messageGroup = messages.FridayAfternoon;
            }
            break;
        case 6: // Saturday
            if (hourOfDay >= 6 && hourOfDay < 12) {
                messageGroup = messages.SaturdayMorning;
            } else if (hourOfDay >= 12 && hourOfDay < 18) {
                messageGroup = messages.SaturdayAfternoon;
            }
            break;
        case 0: // Sunday
            if (hourOfDay >= 6 && hourOfDay < 12) {
                messageGroup = messages.SundayMorning;
            } else if (hourOfDay >= 12 && hourOfDay < 18) {
                messageGroup = messages.SundayAfternoon;
            }
            break;
    }

    if (messageGroup) {
        // Get a random message from the selected group
        const randomIndex = Math.floor(Math.random() * messageGroup.length);
        // Display the selected message
        document.getElementById('message').textContent = messageGroup[randomIndex];
    } else {
        document.getElementById('message').textContent = "Sorry, no messages available for this time.";
    }
}
