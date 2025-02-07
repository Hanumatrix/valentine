document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("move");

    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * window.innerWidth * 0.8;
        const y = Math.random() * window.innerHeight * 0.8;

        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});


function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(createHeart, 500);