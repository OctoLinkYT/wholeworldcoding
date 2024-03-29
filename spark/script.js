document.addEventListener("DOMContentLoaded", function() {
    const eeriePhrases = [
        "GOODNIGHT.",
        "SPARK YOUR IMAGINATION.",
        "YOU SHOULDN'T BE HERE.",
        "IT NEVER DIES.",
        "PREPARE FOR A CHANGE.",
        "ALL WILL BE REVEALED AND RESTORED.",
        "BLOOD IS THE FIRST CLUE.",
        "YOUR MEDIA, REIMAGINED.",
        "COMING SOON.",
        "IT WAITS FOR YOU."
    ];

    const eeriePhraseElement = document.getElementById("eerie-phrase");

    function getRandomPhrase() {
        return eeriePhrases[Math.floor(Math.random() * eeriePhrases.length)];
    }

    function updateEeriePhrase() {
        eeriePhraseElement.textContent = getRandomPhrase();
    }

    updateEeriePhrase();
    setInterval(updateEeriePhrase, 10000); // Change phrase every 10 seconds
});
