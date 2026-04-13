// 1. Dark Mode Toggle (DOM Manipulation)
const modeBtn = document.getElementById('modeToggle');
const body = document.body;

modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Change button text based on mode
    if(body.classList.contains('dark-mode')) {
        modeBtn.innerText = "☀️ Light Mode";
    } else {
        modeBtn.innerText = "🌙 Dark Mode";
    }
});

// --- FORM LOGIC ---
const crewForm = document.getElementById('crewForm');
const feedback = document.getElementById('formFeedback');

// Only run this if the form is found on the current page
if (crewForm) {
    crewForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const name = document.getElementById('userName').value;
        const role = document.getElementById('userRole').value;
        
        feedback.innerText = `Welcome aboard, ${name} the ${role}! We set sail for Ithaca at dawn.`;
        feedback.style.color = "green";
        crewForm.reset();
    });
}

// --- FLIP CARD LOGIC ---
const allCards = document.querySelectorAll('.flip-card');
allCards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    });
});

// --- SEARCH LOGIC ---
const searchInput = document.getElementById('charSearch');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        allCards.forEach(card => {
            const charName = card.getAttribute('data-name').toLowerCase();
            card.style.display = charName.includes(value) ? "block" : "none";
        });
    });
}