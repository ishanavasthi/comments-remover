// Get elements from the DOM
const languageSelect = document.getElementById("languageSelect");
const codeInput = document.getElementById("codeInput");
const removeCommentsBtn = document.getElementById("removeCommentsBtn");
const copyToClipboardBtn = document.getElementById("copyToClipboardBtn");
const codeOutput = document.getElementById("codeOutput");
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Event listener for the "Remove Comments" button
removeCommentsBtn.addEventListener("click", () => {
    const selectedLanguage = languageSelect.value;
    const inputCode = codeInput.value;
    const outputCode = removeComments(inputCode, selectedLanguage);
    codeOutput.value = outputCode;
});

// Event listener for the "Copy to Clipboard" button
copyToClipboardBtn.addEventListener("click", () => {
    codeOutput.select();
    codeOutput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Code copied to clipboard!");
});

// Event listener for the dark mode toggle switch
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
});

if (darkModeToggle.checked) {
    toggleDarkMode();
}

// Function to remove comments 
function removeComments(code, language) {
    if (language === "c++" || language === "java" || language === "javascript") {
        // Remove C++, Java, and JavaScript comments (// and /* */)
        code = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "");
    } else if (language === "python") {
        // Remove Python comments (# and ''')
        code = code.replace(/#.*/g, "").replace(/'''.*?'''/gs, "");
    } else if (language === "golang") {
        // Remove GoLang comments (// and /* */)
        code = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "");
    } else if (language === "ruby") {
        // Remove Ruby comments (#)
        code = code.replace(/#.*/g, "");
    } else if (language === "swift") {
        // Remove Swift comments (// and /* */)
        code = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "");
    } else if (language === "css") {
        // Remove CSS comments (/* */)
        code = code.replace(/\/\*[\s\S]*?\*\//g, "");
    } else if (language === "html") {
        // Remove HTML comments (<!-- -->)
        code = code.replace(/<!--[\s\S]*?-->/g, "");
    }
    return code;
}

// Function to toggle dark mode
function toggleDarkMode() {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
}

// Event listener for the dark mode toggle switch
darkModeToggle.addEventListener("change", toggleDarkMode);

// Check and apply saved dark mode preference
const savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === "enabled") {
    darkModeToggle.checked = true;
    toggleDarkMode();
}

// Function to set and remember the selected language
function setLanguagePreference() {
    const selectedLanguage = languageSelect.value;
    localStorage.setItem("languagePreference", selectedLanguage);
}

// Event listener for the language select dropdown
languageSelect.addEventListener("change", setLanguagePreference);

// Check and apply saved language preference
const savedLanguage = localStorage.getItem("languagePreference");
if (savedLanguage) {
    languageSelect.value = savedLanguage;
}
