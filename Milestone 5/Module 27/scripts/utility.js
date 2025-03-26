function hidden(now) {
    const home = document.getElementById(now);
    home.classList.add('hidden')
}

// show interface 
function showElement(now) {
    const Now = document.getElementById(now);
    Now.classList.remove('hidden');
}

// reset score and life
function reset() {
    setUpdatedTextValue('current-score', 0);
    setUpdatedTextValue('current-life', 5);
}

// random alphabate generator
function getRandomLetter() {
    // get or create an alphabet array;
    const alphabate = 'abcdefghijklmnopqrstuvwxyz';
    const letters = alphabate.split('');

    // get a random index
    const randomIndex = Math.round(Math.random() * 25);
    // or Math.floor(Math.random() * 26);

    return letters[randomIndex];
}


// add bg-color
function setBG(char) {
    const key = document.getElementById(char);
    key.classList.add('bg-[#FFA500]')
}

// remove bg-color
function removeBG(char) {
    const key = document.getElementById(char);
    key.classList.remove('bg-[#FFA500]')
}


// get current text value
function getTextElementValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// set updated value
function setUpdatedTextValue(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}