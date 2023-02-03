import React from 'react';
import { useSelector } from 'react-redux';

const Word = () => {

    const word = useSelector((state) => state.hangman.word);
    const correctLetters = useSelector((state) => state.hangman.correctLetters);


    return (
        // Word
        <div className="word">
            {/* Split the word then loop through each letter */}
            {word.split('').map((letter, i) => {
                return (
                <span className="letter" key={i}>
                    {correctLetters.includes(letter) ? letter : ''} {/* Show the letter if it is in the correct letters array */}
                </span>
                )
            })}
        </div>
        // End Word
    );
};

export default Word;