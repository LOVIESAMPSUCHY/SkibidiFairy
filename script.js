// Lista wróżb dla różnych kategorii
const fortunes = {
    general: [
        "Twoje marzenia wkrótce się spełnią!",
        "Przygotuj się na coś niesamowitego!",
        "Los szykuje dla Ciebie niespodziankę.",
        "Szczęście już na Ciebie czeka.",
        "Wkrótce spotkasz kogoś wyjątkowego."
    ],
    love: [
        "Twoje serce wkrótce zadrży z miłości!",
        "Prawdziwa miłość jest bliżej, niż myślisz.",
        "Ktoś wyjątkowy myśli o Tobie w tej chwili.",
        "Czeka Cię romantyczna przygoda.",
        "Twoja dusza bliźniacza jest już blisko."
    ],
    career: [
        "Awans jest na horyzoncie!",
        "Twoja ciężka praca wkrótce przyniesie owoce.",
        "Nowy projekt otworzy przed Tobą drzwi do sukcesu.",
        "Czeka Cię propozycja, której nie możesz odrzucić.",
        "Twoja kreatywność zostanie doceniona."
    ],
    health: [
        "Twoje zdrowie wkrótce się poprawi.",
        "Znajdź czas na relaks, a poczujesz się lepiej.",
        "Energia i witalność powrócą do Ciebie.",
        "Twoje ciało i umysł osiągną harmonię.",
        "Czeka Cię przypływ sił witalnych."
    ]
};

// Historia wróżb
let fortuneHistory = [];

// Funkcja dodająca wróżbę do historii
function addToHistory(category, fortune) {
    fortuneHistory.push({ category, fortune, timestamp: new Date().toLocaleString() });
    updateHistory();
}

// Funkcja aktualizująca listę historii
function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    fortuneHistory.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `[${entry.timestamp}] (${entry.category}): ${entry.fortune}`;
        historyList.appendChild(li);
    });
}

// Funkcja generująca cząsteczki
function createParticles() {
    const particlesContainer = document.getElementById('magic-particles');
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 1.5}s`;
        particlesContainer.appendChild(particle);
    }
}

// Funkcja usuwająca cząsteczki po animacji
function removeParticles() {
    const particlesContainer = document.getElementById('magic-particles');
    particlesContainer.innerHTML = '';
}

// Główna funkcja generowania wróżby
document.getElementById('get-fortune').addEventListener('click', () => {
    const fortuneElement = document.getElementById('fortune');
    const category = document.getElementById('fortune-category').value;
    const randomFortune = fortunes[category][Math.floor(Math.random() * fortunes[category].length)];

    // Dźwięki
    const magicSound = document.getElementById('magic-sound');
    const revealSound = document.getElementById('reveal-sound');
    magicSound.play();

    // Animacja wyświetlania wróżby
    fortuneElement.classList.remove('hidden');
    fortuneElement.textContent = "Magia działa... ✨";

    // Cząsteczki
    createParticles();

    setTimeout(() => {
        fortuneElement.textContent = randomFortune;
        revealSound.play();
        addToHistory(category, randomFortune);
        removeParticles();
    }, 2000); // Po 2 sekundach wyświetla wróżbę
});

// Inicjalizacja cząsteczek przy ładowaniu strony
window.addEventListener('load', createParticles);