function displayCurrentTime() {
    const now = new Date(); 
    const timeMessage = `The current time is ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}.`; // Format the message

    document.getElementById('timeDisplay').innerText = timeMessage;
}

window.onload = displayCurrentTime; 
