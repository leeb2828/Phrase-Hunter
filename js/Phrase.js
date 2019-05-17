/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(sentence) {
        this.phrase = sentence.toLowerCase();
    }

    /**
     * characters from the random phrase are added to the newly created
     * <li> tags, which are then attached to the HTML page and displayed as hidden letters.
     */
    addPhraseToDisplay() {
        array_of_characters = this.phrase.split('');
        let section = document.querySelector('#phrase ul');
        for (let i in array_of_characters) {
            let li = document.createElement('li');
            li.textContent = array_of_characters[i];
            section.append(li);
            if (array_of_characters[i] === " ") {
                li.className = "space";
            } else {
                li.className = "hide letter";
            }
            
        }

    }

    /**
     * @param letter 
     * @returns true or false, depending on whether the letter is 
     * found in random phrase.
     */
    checkLetter(letter) {
        for (let i in array_of_characters) {
            let found = (array_of_characters[i] === letter) ? true : false;
            if (found === true || i === array_of_characters.length-1) return found;
        }
        
    } 

    /**
     * @Param is single letter (a-z)
     * Reveals the letter/letters on the board (only the user guesses correctly)
     * by changing the classname of the associated <li> tag.
     */
    showMatchedLetter(letter) {
        for (let index in phrase_li_elements) {
            if (letter === phrase_li_elements[index].textContent) {
                phrase_li_elements[index].className = "show";
            }
        }

    }
}
