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

// 2. Form Processing (Requirement: JS Function handles form)
const crewForm = document.getElementById('crewForm');
const feedback = document.getElementById('formFeedback');

crewForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page refresh
    
    const name = document.getElementById('userName').value;
    const role = document.getElementById('userRole').value;
    
    // Provide dynamic feedback (DOM Manipulation)
    feedback.innerText = `Welcome aboard, ${name} the ${role}! We set sail for Ithaca at dawn.`;
    feedback.style.color = "green";
    
    // Reset form
    crewForm.reset();
});