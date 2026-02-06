const messages = [
    "Are you sure, Mikkuu?",
    "Reallyyyy sureeeee ??",
    "Are you positive?",
    "Kochuu pleasee...",
    "Just think about it, Mikku!",
    "If you say noo, I will be reallyy sedd...",
    "I will be veryy sedd...",
    "I will be very very very seddd MIKKUUU...",
    "Okkk fine, I will stop askingggg...",
    "Just kidding, say yes please, Mikkuuuuuuuuuuuuu! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
