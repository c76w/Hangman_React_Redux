import React from 'react';
import { useSelector } from 'react-redux'; // Import the useSelector from redux

const Figure = () => {

    // Declare the wrongLetters variable from the hangman slice store
    const wrongLetters = useSelector((state) => state.hangman.wrongLetters);

    // Get the count of the wrong letters array
    const wrongLettersCount = wrongLetters.length;
    
    return (
        // SVG
        // Use an SVG to show the hangman and use conditional statements
        // to show different parts depending on how many attempts have been used
        <svg height="250" width="200" className="figure-container">
            {/* Base */}
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />

            {/* Head */}
            {wrongLettersCount > 0 &&
                <circle cx="140" cy="70" r="18" />
            }
            {/* Body */}
            {wrongLettersCount > 1 &&
                <line x1="140" y1="90" x2="140" y2="150" />
            }
            {/* Left Arm */}
            {wrongLettersCount > 2 &&
                <line x1="140" y1="120" x2="120" y2="100" />
            }
            {/* Right Arm */}
            {wrongLettersCount > 3 &&
                <line x1="140" y1="120" x2="160" y2="100" />
            }
            {/* Left Leg */}
            {wrongLettersCount > 4 &&
                <line x1="140" y1="150" x2="120" y2="180" />
            }
            {/* Right Leg */}
            {wrongLettersCount > 5 &&
                <line x1="140" y1="150" x2="160" y2="180" />
            }
        </svg>
        // End SVG
    );
};

export default Figure;