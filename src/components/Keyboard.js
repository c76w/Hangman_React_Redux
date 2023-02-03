import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch from redux
import { addCorrectLetter, addWrongLetter, updateAttemptsLeft, addUsedLetter, checkWinOrLoose, resetGame } from '../store/hangman'; // Import reducers from hangman store slice

const Keyboard = (props) => {

    // Set all the variables from the hangman slice store state
    const keys = useSelector((state) => state.hangman.keys);
    const usedLetters = useSelector((state) => state.hangman.usedLetters);
    const wrongLetters = useSelector((state) => state.hangman.wrongLetters);
    const correctLetters = useSelector((state) => state.hangman.correctLetters);
    const word = useSelector((state) => state.hangman.word);

    // Set use dispatch
    const dispatch = useDispatch();

    // Function to handle the letter button event
    const handleButtonClick = (e) => {

        // Set the letter variable from the event target value
        const letter = e.target.value;

        // Check the letter to see if it is a correct letter (matches a letter in the word)
        // or it is a wrong letter (doesn't match a letter in the word)
        if (word.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                dispatch(addCorrectLetter(letter)); // Add the letter to the correct letters array
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                dispatch(addWrongLetter(letter)); // Add the letter to the correct letters array
                dispatch(updateAttemptsLeft()); // Update the attempts used state
            }
        }
        // Check for a win or lose
        dispatch(checkWinOrLoose());

        // Add the letter to the used letters state array
        dispatch(addUsedLetter(letter));
    }

    // Function to handle the reset click to reset the game
    const handleReset = () => {

        // Set a random word in the hangman reducer
        dispatch(resetGame()); 
            
        // Reset the random word
        props.randomWord();
    }

    return (
        // Keyboard
        <div className='keyboard'>
            {keys.map((key, i) => {
                return (
                    <button
                        className={'btn key ' + (wrongLetters.includes(key) ? 'keyWrong ' : 'keyCurrent ')  + (correctLetters.includes(key) ? 'keyCorrect' : '') }
                        key={i}
                        disabled={usedLetters.includes(key) ? true : false}
                        value={key}
                        onClick={(e) => handleButtonClick(e)}
                        >{key}
                    </button>
                );
            })}
            <button type='button' onClick={() => {handleReset()}} className="btn key btn-outline-light">Reset</button>
        </div>
        // End Keyboard
    );
};

export default Keyboard;