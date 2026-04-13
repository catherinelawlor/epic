// --- 1. DARK MODE TOGGLE ---
const modeBtn = document.getElementById('modeToggle');
if (modeBtn) {
    modeBtn.onclick = () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        modeBtn.innerText = isDark ? "☀️ Light" : "🌙 Dark";

        // Clean up manual colors to let CSS take over
        document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, label').forEach(el => {
            el.style.color = "";
        });
    };
}

// --- 2. UNIVERSAL FLIP LOGIC ---
// This handles BOTH character cards and saga cards
document.addEventListener('click', function (e) {
    const card = e.target.closest('.flip-card');
    if (card) {
        card.classList.toggle('is-flipped');
    }
});

// --- 3. SEARCH LOGIC (Video Page Only) ---
const searchInput = document.getElementById('charSearch');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        const allSlides = document.querySelectorAll('.character-slide');
        
        allSlides.forEach(slide => {
            const name = slide.getAttribute('data-name').toLowerCase();
            if (value === "") {
                slide.style.display = ""; 
                slide.style.opacity = "";
            } else if (name.includes(value)) {
                slide.style.display = "block";
                slide.classList.add('active');
                slide.style.opacity = "1";
                slide.style.zIndex = "10";
            } else {
                slide.style.display = "none";
                slide.classList.remove('active');
                slide.style.opacity = "0";
            }
        });
    });
}

// --- 4. AUTOMATIC CYCLE (Video Page Only) ---
function startAutoCycle(slotId) {
    const slot = document.getElementById(slotId);
    if (!slot) return;
    const slides = slot.querySelectorAll('.character-slide');
    let currentIndex = 0;

    setInterval(() => {
        const isSearching = searchInput && searchInput.value.length > 0;
        if (!isSearching && slides.length > 0) {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }
    }, 5000);
}

// Only start cycles if we are on the video page
if (document.getElementById('slot1')) {
    startAutoCycle('slot1');
    startAutoCycle('slot2');
}

// --- 5. FORM LOGIC ---
const crewForm = document.getElementById('crewForm');
if (crewForm) {
    crewForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const name = document.getElementById('userName').value;
        const role = document.getElementById('userRole').value;
        const feedback = document.getElementById('formFeedback');
        feedback.innerText = `Welcome aboard, ${name} the ${role}!`;
        feedback.style.color = "green";
        crewForm.reset();
    });
}