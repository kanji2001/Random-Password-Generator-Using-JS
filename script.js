function generatePassword() {
    const passwordSize = document.getElementById('passwordSize').value;
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
        alert('Select at least one option.');
        return;
    }

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validChars = '';
    let generatedPassword = '';

    if (useUppercase) validChars += uppercaseChars;
    if (useLowercase) validChars += lowercaseChars;
    if (useNumbers) validChars += numberChars;
    if (useSymbols) validChars += symbolChars;

    for (let i = 0; i < passwordSize; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars.charAt(randomIndex);
    }

    displayPassword(generatedPassword);
}

function displayPassword(password) {
    const passwordResult = document.getElementById('passwordResult');
    passwordResult.textContent = `Generated Password: ${password}`;
}
