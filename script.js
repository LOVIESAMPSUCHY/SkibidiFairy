// script.js
document.addEventListener("DOMContentLoaded", () => {
    const fortunes = [
        "Sukces czeka za rogiem.",
        "Przygotuj się na niespodziankę.",
        "Czas na nowe wyzwania.",
        "Niespodziewany zwrot akcji odmieni twoje plany."
    ];

    const magicBall = document.getElementById("magicBall");
    const fortuneText = document.getElementById("fortune");

    magicBall.addEventListener("click", () => {
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        
        // Zmień tekst i dodaj animację
        fortuneText.textContent = randomFortune;
        fortuneText.classList.add("show");

        // Usuń animację po 3 sekundach
        setTimeout(() => {
            fortuneText.classList.remove("show");
        }, 3000);
    });
});
