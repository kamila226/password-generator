const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const button = document.getElementById("generate-btn");
const select = document.getElementById("select-length");
const lengthSelector = document.getElementById("select-length");
const onlyLetters = document.getElementById("only-letters");
const withoutCharacters = document.getElementById("without-spec-char");

for (let i = 6; i < 17; i++) {
    select.innerHTML += `<option value="${i}">${i}</option>`
}

console.log(characters.indexOf("9"))

function generateRandom() {
    let randomPassword = "";
    let lastIndex;
    let randIndex;
    
    if (onlyLetters.checked) {
        lastIndex = 52;
    } else if (withoutCharacters.checked) {
        lastIndex = 62;
    } else {
        lastIndex = characters.length;
    }
    
    
    for (let i = 0; i < lengthSelector.value; i++) {
    randIndex = Math.floor(Math.random() * lastIndex);
    randomPassword += characters[randIndex];
    }
    return randomPassword;
}

button.addEventListener("click", function() {
    password1.textContent = generateRandom();
    password2.textContent = generateRandom();
})


