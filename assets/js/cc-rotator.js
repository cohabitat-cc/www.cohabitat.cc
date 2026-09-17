/**
 * Cohabitat.cc — Animation dynamique de la Philosophie CC
 * Fait défiler les différentes définitions de "CC" dans le titre et synchronise avec les cartes.
 */
document.addEventListener('DOMContentLoaded', () => {
    const rotatorContainer = document.getElementById('cc-rotator-container');
    const rotatorText = document.getElementById('cc-rotator-text');
    const brandCC = document.getElementById('cc-interactive');
    const cards = document.querySelectorAll('.philosophie-card');

    if (!rotatorText) return;

    // Récupérer les définitions depuis l'attribut data ou le DOM
    let definitions = [];
    if (rotatorContainer && rotatorContainer.dataset.definitions) {
        try {
            definitions = JSON.parse(rotatorContainer.dataset.definitions);
        } catch (e) {
            console.error('Erreur parsing definitions CC', e);
        }
    }

    if (!definitions.length) {
        definitions = [
            { icon: '🚲', title: 'Club Cycliste' },
            { icon: '🏡', title: 'Communauté Cohabitat' },
            { icon: '🎯', title: 'Carbone Cible' },
            { icon: '🏛️', title: 'Centre Citoyen' },
            { icon: '✨', title: 'Communauté Créative' },
            { icon: '💻', title: 'Code Commun' }
        ];
    }

    let currentIndex = 0;
    let isPaused = false;
    let timer = null;

    function updateDisplay(index, manual = false) {
        currentIndex = (index + definitions.length) % definitions.length;
        const item = definitions[currentIndex];

        // Animation de sortie (fade & slide up)
        rotatorText.classList.add('fade-out');

        setTimeout(() => {
            rotatorText.innerHTML = `<span class="cc-icon">${item.icon}</span> <strong class="cc-name">${item.title}</strong>`;
            rotatorText.classList.remove('fade-out');
            rotatorText.classList.add('fade-in');

            setTimeout(() => {
                rotatorText.classList.remove('fade-in');
            }, 300);
        }, 200);

        // Synchroniser avec les cartes de la grille
        cards.forEach((card, i) => {
            if (i === currentIndex) {
                card.classList.add('active-cc');
            } else {
                card.classList.remove('active-cc');
            }
        });
    }

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            if (!isPaused) {
                updateDisplay(currentIndex + 1);
            }
        }, 3200);
    }

    // Gestion des événements
    if (rotatorContainer) {
        rotatorContainer.addEventListener('mouseenter', () => { isPaused = true; });
        rotatorContainer.addEventListener('mouseleave', () => { isPaused = false; });
        rotatorContainer.addEventListener('click', () => {
            updateDisplay(currentIndex + 1, true);
        });
    }

    if (brandCC) {
        brandCC.addEventListener('click', () => {
            updateDisplay(currentIndex + 1, true);
        });
    }

    // Interaction sur les cartes
    cards.forEach((card, i) => {
        card.addEventListener('mouseenter', () => {
            isPaused = true;
            updateDisplay(i, true);
        });
        card.addEventListener('mouseleave', () => {
            isPaused = false;
        });
        card.addEventListener('click', () => {
            updateDisplay(i, true);
        });
    });

    // Initialisation
    updateDisplay(0);
    startTimer();
});
