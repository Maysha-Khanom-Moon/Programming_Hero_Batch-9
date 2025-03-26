function handleKeyboardKey(event) {
    const playerPressed = event.key;

    // get the expected to press
    const currentChar = document.getElementById('current-char').innerText;

    // Enter the game
    if (playerPressed === 'Enter') {
        removeBG(currentChar);

        play('home-screen');
    }

    // Escape the game
    if (playerPressed === 'Escape') {
        hidden('play-ground');
        hidden('score-board');
    
        showElement('home-screen');
    }

    // check: matched or not
    if(currentChar == playerPressed) {
        /**
         * update score:
         * 1. get the current score
         */
        const currentScore = getTextElementValue('current-score');
        
        // 2. increase the scope by 1
        const newScore = currentScore + 1;

        // 3. show the updated score
        setUpdatedTextValue('current-score', newScore);

        // start a new ruound
        removeBG(currentChar);
        gameLoop();
    }
    else if(playerPressed !== 'Enter') {
        // step 1: get the current life
        const currentLife = getTextElementValue('current-life');

        // step 2: reduce the life count
        const updatedLife = currentLife - 1;

        // step 3: display the updated life count
        setUpdatedTextValue('current-life', updatedLife);


        // when life = 0
        if(updatedLife == 0) {
            removeBG(currentChar);

            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardKey);


// gameOver
function gameOver() {
    hidden('play-ground');

    // update the score
    const updatedScore = getTextElementValue('current-score');
    setUpdatedTextValue('score', updatedScore);

    // show the score-board;
    showElement('score-board')
}


function play(now) {
    // hidden the current interface and start the game
    hidden(now);

    // reset score and life
    reset();

    // show the play ground
    showElement('play-ground')

    gameLoop();
}

function gameLoop() {
    // step - 1: generate a random letter
    const char = getRandomLetter();

    // step - 2: show the letter
    const showBar = document.getElementById('current-char');
    showBar.innerText = char;

    // step - 3: set bg-color of char
    setBG(char);
}
