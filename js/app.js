/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game_obj = new Game();
let phrase_obj;

// value is either "You Win" or "You lose"
let win_or_lose;
// previously guessed letters
let previous_guesses = [];

// array of characters found in the current random phrase
let array_of_characters;

// all the "keys" displayed on the keyboard
let all_keys = document.querySelectorAll('.key');

// all of the hidden letters displayed that the user has to guess
let phrase_li_elements;


/**
 * When you click the "Start Game" button, a new screen
 * appears and the game begins!
 */
document.getElementById("btn__reset").addEventListener("click", function(){
    if (game_obj.activePhrase !== null) {
        // Game will be reset when the user selects "Retry Game"
        game_obj.resetEntireBoard();
    }
    game_obj.startGame();
});


// Event listener for "clicked" letter on keyboard
document.getElementById('qwerty').addEventListener('click', (e) => {
    let key = e.target;
    if (key.tagName !== 'BUTTON') {
        return;
    } else if (game_obj === null) {
        return;
    } 
    check_prev_letters(key);
    previous_guesses.push(key.textContent.toLowerCase());
});

// Event listener for "typed" letter on keyboard
window.addEventListener("keyup", function(event) {
    if (event.which > 64 && event.which < 91) {
        for (item of all_keys) {
            if (item.textContent === event.key) {
                check_prev_letters(item);
                previous_guesses.push(String.fromCharCode(event.keyCode).toLowerCase());
            }
        }
    }
    
});

function check_prev_letters(button) {
    let letter = button.textContent;
    if (!previous_guesses.includes(letter)) {
        game_obj.handleInteraction(button);
    } 
}

