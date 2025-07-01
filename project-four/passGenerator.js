function generatePassword(length, includeLowercase, includeUppercase, includeSymbols, includeNumbers){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+";
    const numbers = "0123456789";
    
    let allowedChars = "";
    let password = "";
    
    const result = document.getElementById("result");

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeSymbols ? symbols : "";
    allowedChars += includeNumbers ? numbers : "";

    if(allowedChars.length === 0){
    result.value = "Check at least 1 below"; //use the value because it's in the input tag
    return;
    }
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    result.value = password;

}

function handleGenerate() {
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const passwordLength = 12;

    generatePassword(passwordLength, includeLowercase, includeUppercase, includeSymbols, includeNumbers);
}