// Page engine JS

// Create a GDPR banner and cookie handler
function cookiePower() {

    function saveUserPreference(preference) {
        // Save user preference in localStorage
        localStorage.setItem('cookiePreference', preference);
    }
    
    function getUserPreference() {
        // Retrieve user preference from localStorage
        return localStorage.getItem('cookiePreference');
    }

    function isUserPreferenceSaved() {
        // Check if user preference is saved in localStorage
        return localStorage.getItem('cookiePreference') !== null;
    }

        // Check if user preference is already saved
    if (isUserPreferenceSaved()) {
        // If user preference is saved, return without showing the banner
        return;
    }
    
    const page = document.getElementById('body');
    const nav = document.getElementById('navBar');
    
    const banner = document.createElement('div')
    banner.id = 'banner'
    banner.innerHTML = `
        <h3>Privacy Notice:</h3>
        <p>This site may employ cookies to improve user experience. By proceeding, you agree to the privacy policy and terms of use.</p>
        <button id="ackGDPR">OK</button>
        <button id="gdprRequired">Required cookies only</button>
        <a href="./policy.html">Read terms</a>
    `
    page.insertBefore(banner, nav)

    const okButton = document.getElementById('ackGDPR');
    okButton.addEventListener('click', function() {
        // Save response
        saveUserPreference('accept');
        // Hide banner
        banner.style.display = 'none';
    });

    const requiredButton = document.getElementById('gdprRequired');
    requiredButton.addEventListener('click', function() {
        // Save response
        saveUserPreference('required');
        // Hide banner
        banner.style.display = 'none';
    });
}

if (window.matchMedia) {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    console.log('Device prefers dark mode:', prefersDarkMode);
    
    if (!localStorage.getItem('darkMode')) {
        // Add 'dark-mode' class only if device prefers dark mode
        if (prefersDarkMode) {
            document.body.classList.add('dark-mode');
        }
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);

    const toggleButton = document.getElementById('themeToggle');
    toggleButton.innerHTML = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Check and apply dark mode preference on page load
function applyDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        console.log('Loading preferences: isDarkMode?', isDarkMode);

        const toggleButton = document.getElementById('themeToggle');
        toggleButton.innerHTML = isDarkMode ? 'Light Mode' : 'Dark Mode';
    }
    else 
    console.log('Loading preferences: isDarkMode?', isDarkMode);

    const toggleButton = document.getElementById('themeToggle');
    toggleButton.innerHTML = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Call the cookie banner
cookiePower();

// Fetch theme preference from localStorage
applyDarkModePreference();

const toggleButton = document.getElementById('themeToggle');

toggleButton.addEventListener('click', toggleDarkMode);

