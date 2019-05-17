/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Creates a list of 5 phrases for the
     * method getRandomPhrase() to choose from.
     * @returns an array of 5 phrase objects.
     */
    createPhrases() {
        const list_of_phrases = [
            {phrase: "star wars"}, 
            {phrase: "game of thrones"},
            {phrase: "star trek"},
            {phrase: "halt and catch fire"},
            {phrase: "lord of the ring"}
        ];
        return list_of_phrases;
    }

    /**
     * Randomly selects one of the phrases stored in "this.phrases"
     * @returns the selected phrase.
     */
    getRandomPhrase() {
        let length = this.phrases.length;
        let selected_phrase = this.phrases[Math.floor(Math.random()*length)];
        return selected_phrase.phrase; 
    }

    /**
     * This emthod removes a "life" from the scoreboard, by replacing
     * one of the liveHeart images with a lostHeart image.
     * 
     * Adds one point to the "missed" variable and will call the
     * gameOver method if the number of missed tries is equal to 5.
     */
    removeLife() {
        this.missed += 1;
        let index = (game_obj.missed - 1);

        let lives = document.querySelectorAll('#scoreboard img');
        lives[index].src = "images/lostHeart.png";

        if (this.missed === 5) {
            win_or_lose = "You lose!"
            this.gameOver(win_or_lose);
        }
    }

    /**
     * This method checks to see if the user has guessed all 
     * the letters in the random phrase.
     * If all the letters are revealed, calls the gameOver() method.
     */
    checkForWin() {
        let hidden = document.querySelectorAll(".hide.letter");
        if (hidden.length === 0) {
            win_or_lose = "You won!";
            this.gameOver(win_or_lose);
        }
    }

    /**
     * Resets entire board after the user clicks the "Retry Game" button.
     */
    resetEntireBoard() {
        window.location.reload();
    }

    /**
     * @Param A message saying "You Win" or "You lose".
     * This method displays the original start screen, except with
     * - A "Retry Game" button instead of a "Start Game" button.
     * - A "You win" or "You lose" message.
     */
    gameOver(message) {
        win_or_lose = message;
        document.getElementById('overlay').style.display = "";
        // "Start Game" button replaced with "Retry Game" button.
        document.getElementById("btn__reset").textContent = "Retry Game";
        document.querySelector("h1#game-over-message").textContent = win_or_lose;
    }

    /**
     * @param button the user selected. 
     * For example -> <button class="key">q</button>
     *  
     * If the user, for example, guesses an "a", and there happens to
     * be one or more a's in the hidden phrase, all of the a characters are
     * displayed. If not, one life is removed from the scoreboard.
     * The game will end when the user guesses incorrectly too many times or 
     * when all the hidden letters are shown.
     */
    handleInteraction(button) {
        let letter_to_check = button.textContent;
        let found = phrase_obj.checkLetter(letter_to_check);
        if (found) {
            phrase_obj.showMatchedLetter(letter_to_check);
            button.classList.add("chosen");
            this.checkForWin();
        }
        if (!found) {
            button.classList.add("wrong");
            this.removeLife();
        }

        button.disabled = true;
    }

    /**
     * Begin game by 
     * - getting rid of the initial (Start Game) screen.
     * - Initalizing a new phrase object and selecting a new random phrase.
     * - Calling a method that displays the new random 
     *   phrase (as hidden letters) to the screen.
     */
    startGame() {
        document.getElementById('overlay').style.display = "none";
        this.activePhrase = this.getRandomPhrase(); 
        phrase_obj = new Phrase(this.activePhrase);

        phrase_obj.addPhraseToDisplay();
        phrase_li_elements = document.querySelectorAll("#phrase li");
    }

}