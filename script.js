const fortunes = [
    "Dziś czeka cię coś wyjątkowego!",
    "Twoje marzenia wkrótce się spełnią.",
    "Przygotuj się na wielką niespodziankę.",
    "Szczęście jest tuż za rogiem!",
    "Wkrótce spotkasz kogoś wyjątkowego."
];

document.getElementById('get-fortune').addEventListener('click', () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const fortuneElement = document.getElementById('fortune');
    fortuneElement.textContent = randomFortune;
    fortuneElement.classList.remove('hidden');
});
