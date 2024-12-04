// script.js
document.addEventListener("DOMContentLoaded", () => {
    const fortunes = [
        "Dziś spotkasz kogoś wyjątkowego!",
        "Sukces czeka za rogiem.",
        "Przygotuj się na niespodziankę.",
        "Czas na nowe wyzwania.",
        "Twoje marzenia wkrótce się spełnią.",
        "Znajdziesz odpowiedź na dręczące pytanie.",
        "Drobne gesty przyniosą wielką radość.",
        "Twój uśmiech odmieni czyjś dzień.",
        "Zaufaj swojemu instynktowi – nie zawiedzie cię.",
        "Przyjaźń to klucz do dzisiejszego sukcesu.",
        "Twoje kreatywne pomysły zostaną docenione.",
        "Nie bój się spróbować czegoś nowego.",
        "Miłość jest bliżej, niż myślisz.",
        "Otrzymasz ważną wiadomość.",
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
