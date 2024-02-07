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
        <h3>Privacy Notice</h3>
        <p>This site may employ cookies to improve user experience. By continuing to browse this site, you agree to the terms of use.</p>
        <a href="./policy.html">Read terms</a>
        <button id="ackGDPR">OK</button>
        <button id="gdprRequired">Required cookies only</button>
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

// Call the hello world.
hello("Hello World!");

// Call the cookie banner
cookiePower();

// Fetch theme preference from localStorage
applyDarkModePreference();

const toggleButton = document.getElementById('themeToggle');

toggleButton.addEventListener('click', toggleDarkMode);
