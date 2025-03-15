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
let fortuneHistory = JSON.parse(localStorage.getItem('fortuneHistory')) || [];
let userName = localStorage.getItem('userName') || '';

// Funkcja personalizująca wróżby
function personalizeFortune(fortune) {
    return userName ? `${userName}, ${fortune}` : fortune;
}

// Funkcja zapisująca imię użytkownika
function saveUserName() {
    const nameInput = document.getElementById('user-name');
    userName = nameInput.value.trim();
    localStorage.setItem('userName', userName);
    document.querySelector('.welcome-section').classList.add('hidden');
    document.getElementById('welcome-sound').play();
}

// Funkcja przełączająca tryb ciemny/jasny
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const themeIcon = document.querySelector('#theme-toggle-btn i');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Funkcja dodająca wróżbę do historii
function addToHistory(category, fortune) {
    fortuneHistory.push({ category, fortune: personalizeFortune(fortune), timestamp: new Date().toLocaleString() });
    localStorage.setItem('fortuneHistory', JSON.stringify(fortuneHistory));
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

// Funkcja czyszcząca historię
function clearHistory() {
    fortuneHistory = [];
    localStorage.setItem('fortuneHistory', JSON.stringify(fortuneHistory));
    updateHistory();
}

// Funkcja generująca cząsteczki
function createParticles() {
    const particlesContainer = document.getElementById('magic-particles');
    for (let i = 0; i < 15; i++) {
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

// Funkcja pokazująca magiczny tekst w kuli
function showMagicText() {
    const magicText = document.getElementById('magic-text');
    magicText.textContent = "✨ Magia działa... ✨";
    magicText.style.opacity = 1;
    setTimeout(() => {
        magicText.style.opacity = 0;
    }, 2000);
}

// Funkcja udostępniania wróżby
function shareFortune(fortune) {
    const shareButtons = document.getElementById('share-buttons');
    shareButtons.classList.remove('hidden');

    document.getElementById('share-twitter').onclick = () => {
        const tweet = encodeURIComponent(`Moja wróżba od SkibidiFairy: ${fortune} #SkibidiFairy`);
        window.open(`https://twitter.com/intent/tweet?text=${tweet}`, '_blank');
    };

    document.getElementById('share-facebook').onclick = () => {
        const fbShare = encodeURIComponent(`Moja wróżba od SkibidiFairy: ${fortune}`);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${fbShare}`, '_blank');
    };

    document.getElementById('share-copy').onclick = () => {
        navigator.clipboard.writeText(`Moja wróżba od SkibidiFairy: ${fortune}`).then(() => {
            alert('Wróżba skopiowana do schowka!');
        });
    };
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

    // Cząsteczki i magiczny tekst
    createParticles();
    showMagicText();

    setTimeout(() => {
        const personalizedFortune = personalizeFortune(randomFortune);
        fortuneElement.textContent = personalizedFortune;
        revealSound.play();
        addToHistory(category, randomFortune);
        removeParticles();
        shareFortune(personalizedFortune);
    }, 2000); // Po 2 sekundach wyświetla wróżbę
});

// Inicjalizacja
window.addEventListener('load', () => {
    // Inicjalizacja cząsteczek
    createParticles();

    // Inicjalizacja trybu ciemnego/jasnego
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('#theme-toggle-btn i').classList.replace('fa-moon', 'fa-sun');
    }

    // Inicjalizacja sekcji powitalnej
    if (!userName) {
        document.querySelector('.welcome-section').classList.remove('hidden');
    } else {
        document.getElementById('welcome-sound').play();
    }

    // Aktualizacja historii
    updateHistory();
});

// Obsługa zapisu imienia
document.getElementById('save-name').addEventListener('click', saveUserName);

// Obsługa przełącznika trybu
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

// Obsługa czyszczenia historii
document.getElementById('clear-history').addEventListener('click', clearHistory);