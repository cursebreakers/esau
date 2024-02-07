// Page engine JS


// Make a quick a hello world for a warmup
function hello(message) {
    console.log(message);
}

// Create a GDPR banner and cookie handler
function cookiePower() {
    console.log('rendering cookie banner')

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
        console.log('User preference detected. Cookie banner not displayed.');
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
    
    if (prefersDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    const toggleButton = document.getElementById('themeToggle');
    toggleButton.innerHTML = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Check and apply dark mode preference on page load
function applyDarkModePreference() {
    const isDarkModeCookie = localStorage.getItem('darkMode') === 'true';

    // Check if user has a dark mode preference stored in localStorage
    if (isDarkModeCookie) {
        document.body.classList.add('dark-mode');
        console.log('Loading preferences: Dark mode from cookie');
    } else {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log('Device prefers dark mode:', prefersDarkMode);

        // Check if device prefers dark mode and user hasn't set a preference
        if (prefersDarkMode && !isDarkModeCookie) {
            document.body.classList.add('dark-mode');
            console.log('Loading preferences: Dark mode from device');
        }
    }

    const toggleButton = document.getElementById('themeToggle');
    toggleButton.innerHTML = isDarkModeCookie ? 'Light Mode' : 'Dark Mode';
}

// Call the hello world.
hello("Hello World!");

// Call the cookie banner
cookiePower();

// Fetch theme preference from localStorage
applyDarkModePreference();

const toggleButton = document.getElementById('themeToggle');

toggleButton.addEventListener('click', toggleDarkMode);
