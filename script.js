let messages = ["Please?", "Give me a chance!", "Are you sure?", "Think again!", "Pretty please?", "Don’t break my heart 💔"];

let gifUrls = [
    "https://i.pinimg.com/originals/9b/a4/f8/9ba4f8df0469efc7612709aa6d2ce4b6.gif",
    "https://i.pinimg.com/originals/e0/82/6c/e0826cc7433b67a9a6aefaab495c7b00.gif",
    "https://i.pinimg.com/originals/20/f0/c6/20f0c64e7bb4bc75b9aaf77a1b204cda.gif",
    "https://i.pinimg.com/originals/e8/75/28/e875289a37046ec3b0b6cba57e780312.gif",
    "https://i.pinimg.com/originals/2b/b8/75/2bb875db8f6d8862de5b0518c0d765e5.gif",
    "https://i.pinimg.com/originals/3f/f2/6b/3ff26b166fa2ddbaef8b0984d6297ee3.gif"
];


let noCount = 0;
let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let messageText = document.getElementById("message");
let gifImage = document.getElementById("gif"); // Get the <img> tag

noButton.addEventListener("click", rejectLove);
yesButton.addEventListener("click", acceptLove);

function rejectLove() {
    if (noCount < messages.length) {
        messageText.innerText = messages[noCount];
        gifImage.src = gifUrls[noCount]; // 👈 change GIF
        noCount++;

        // Resize buttons for fun
        noButton.style.transform = `scale(${1 - noCount * 0.1})`;
        yesButton.style.transform = `scale(${1 + noCount * 0.1})`;
    }

    if (noCount === messages.length) {
        noButton.style.display = "none";
    }
}

function acceptLove() {
    document.getElementById("valentine").innerHTML = `
        <img src="https://imagizer.imageshack.com/img923/8949/IeUtqJ.jpg" class="love-image" />>
        <div class="question">🩵 THANK YOU SO MUCH, UBI CILEMBU, LOVE YOU 🩵</div>
    `;
    launchConfetti();
    startHeartRain();
}

function launchConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function startHeartRain() {
    const heartContainer = document.getElementById("heart-container");
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "⭐";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}