// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to update UTC time
    function updateUTCTime() {
        const now = new Date();
        const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        const timeInput = document.getElementById('time');
        timeInput.value = utcTime.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // Update time immediately and then every minute
    updateUTCTime();
    setInterval(updateUTCTime, 60000);

    // Get the form element
    const form = document.getElementById('atisForm');
    
    // Add submit event listener
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get all form values
        const discordUsername = document.getElementById('discordUsername').value;
        const icao = document.getElementById('icao').value;
        const atisLetter = document.getElementById('atisLetter').value;
        const time = document.getElementById('time').value;
        const wind = document.getElementById('wind').value;
        const visibility = document.getElementById('visibility').value;
        const departureRunway = document.getElementById('departureRunway').value;
        const arrivalRunway = document.getElementById('arrivalRunway').value;
        const approach = document.getElementById('approach').value;
        const notams = document.getElementById('notams').value;

        // Generate ATIS text with Discord username
        const atisText = `@${discordUsername}

${icao} ATIS Information ${atisLetter}
${time} Zulu

Wind ${wind}
Visibility ${visibility}

Landing and departing runway(s) ${departureRunway} for departure, ${arrivalRunway} for arrival.
${approach} approaches in use.

${notams ? `${notams}\n` : ''}Advise on initial contact you have Information ${atisLetter}.`;

        // Display the generated ATIS
        const outputDiv = document.getElementById('atisOutput');
        outputDiv.textContent = atisText;
    });
});
