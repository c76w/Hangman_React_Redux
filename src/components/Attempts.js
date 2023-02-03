import React from 'react';
import { useSelector } from 'react-redux'; // Import the useSelector from redux

const Attempts = () => {

    // Declare the wrongLetters variable from the hangman slice store
    const attemptsLeft = useSelector((state) => state.hangman.attemptsLeft);

    return (
        // Attempts left
        // Use a conditioanl statement and show the attempts left in red if there is only one attempt left
        <div className={'attemptsContainer ms-auto '  + (attemptsLeft === 1 ? 'danger' : '')}>
            <span>Attempts Left: {attemptsLeft}</span>
        </div>
        // End Attempts LEft
    );
};

export default Attempts;