// --- 1. CLEAN DARK MODE ---
const modeBtn = document.getElementById('modeToggle');
if (modeBtn) {
    modeBtn.addEventListener('click', () => {
        // Toggle the dark-mode class
        document.body.classList.toggle('dark-mode');
        
        // Update the button text
        if (document.body.classList.contains('dark-mode')) {
            modeBtn.innerText = "☀️ Light Mode";
        } else {
            modeBtn.innerText = "🌙 Dark Mode";
        }

        // IMPORTANT: Remove any manual colors set by previous search/logic
        const allText = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, label');
        allText.forEach(el => el.style.color = ""); 
    });
}

// --- 2. AUTOMATIC CYCLE ---
function startAutoCycle(slotId) {
    const slot = document.getElementById(slotId);
    if (!slot) return;
    const slides = slot.querySelectorAll('.character-slide');
    let currentIndex = 0;

    setInterval(() => {
        const searchInput = document.getElementById('charSearch');
        const isSearching = searchInput && searchInput.value.length > 0;
        
        // Only cycle if the user is NOT searching
        if (!isSearching) {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }
    }, 5000);
}
startAutoCycle('slot1');
startAutoCycle('slot2');

// --- 3. UNIVERSAL FLIP LOGIC (Only one block!) ---
document.addEventListener('click', function (e) {
    const card = e.target.closest('.flip-card');
    if (card) {
        card.classList.toggle('is-flipped');
    }
});

// --- 4. SEARCH LOGIC ---
const searchInput = document.getElementById('charSearch');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        const allSlides = document.querySelectorAll('.character-slide');
        
        allSlides.forEach(slide => {
            const name = slide.getAttribute('data-name').toLowerCase();
            
            if (value === "") {
                // Reset to CSS defaults when search is empty
                slide.style.display = ""; 
                slide.style.opacity = "";
            } else if (name.includes(value)) {
                // Show matching card within the stack
                slide.style.display = "block"; // Changed to block for visibility
                slide.classList.add('active');
                slide.style.opacity = "1";
                slide.style.zIndex = "10"; // Keep it on top
            } else {
                // Hide non-matching cards
                slide.style.display = "none";
                slide.classList.remove('active');
                slide.style.opacity = "0";
                slide.style.zIndex = "1";
            }
        });
    });
}

// --- 5. FORM LOGIC ---
const crewForm = document.getElementById('crewForm');
const feedback = document.getElementById('formFeedback');
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