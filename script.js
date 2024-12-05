const fortunes = [
    "Twoje marzenia wkrótce się spełnią!",
    "Przygotuj się na coś niesamowitego!",
    "Los szykuje dla Ciebie niespodziankę.",
    "Szczęście już na Ciebie czeka.",
    "Wkrótce spotkasz kogoś wyjątkowego."
];

document.getElementById('get-fortune').addEventListener('click', () => {
    const fortuneElement = document.getElementById('fortune');
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    // Animacja wyświetlania wróżby
    fortuneElement.classList.remove('hidden');
    fortuneElement.textContent = "Magia działa... ✨";

    setTimeout(() => {
        fortuneElement.textContent = randomFortune;
    }, 2000); // Po 2 sekundach wyświetla wróżbę
});
