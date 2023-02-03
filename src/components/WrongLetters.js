import React from 'react';
import { useSelector } from 'react-redux';

const WrongLetters = () => {
    // Get the wrong letters array from hangman state
    const wrongLetters = useSelector((state) => state.hangman.wrongLetters);
    return (
        // Wrong Letters
        <div>
            {/* Display only if there are any wrong letters in the array then loop through the wrong letters array and display each wrong letter entered */}
            {wrongLetters.length > 0 &&
                <div className="wrongLettersContainer">
                    <span>Wrong: </span>
                    {wrongLetters
                        .map((letter, i) => <span key={i}>{letter}</span>)
                        .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)
                    }
                </div>
            }
        </div>
        // End Wrong Letters
    );
};

export default WrongLetters;