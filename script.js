(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure afru?🤣😂",
    "Really afru??❤😔😔",
    "Pls maan ja chudail...🥰🥰😘😘",
    "Suggy Wuuggy please say yes!😥",
    "Pookie Pookie!! say yes to daddy na!😈😘",
    "If you say no afru, daddy will be really sad..😭😭",
    "dill tut dis babe 💔😭",
    "Ok fine, Chudail 😑😒😒😒",
    "Soch lo babe, abhi bhii waqt hai...😔🔪🔪",
    "No was never an option babe ❤🔪",
    "I love you babe ❤❤❤❤",
    
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;

        // Increase the font size of the "Yes" button by a factor of 1.2
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        const newSize = currentSize * 1.2;
        yesButton.style.fontSize = `${newSize}px`;
    }

    // Hide the "No" button after the last message has been displayed
    if (messageIndex >= messages.length) {
        noButton.style.display = 'none';
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Audio control
const bgMusic = document.getElementById('bg-music');
const playPauseButton = document.getElementById('play-pause');

playPauseButton.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        playPauseButton.classList.remove('play');
        playPauseButton.classList.add('pause');
    } else {
        bgMusic.pause();
        playPauseButton.classList.remove('pause');
        playPauseButton.classList.add('play');
    }
});
