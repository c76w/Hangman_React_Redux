import { createSlice } from "@reduxjs/toolkit";


export const hangmanSlice = createSlice({

    name: 'hangman',

    initialState: {
        wrongLetters: [],
        correctLetters: [],
        attemptsLeft: 6,
        usedLetters: [],
        keys: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        word: '',
        gameStatus: '',


    },

    reducers: {
            // Update Attempts Left
            updateAttemptsLeft: (state) => {
                state.attemptsLeft = state.attemptsLeft - 1;
            },
            // Get a random word
            getRandomWord: (state, action) => {
                state.word = action.payload;
            },
            // Add correct inputted letters to the correctLetters array
            addCorrectLetter: (state, action) => {
                state.correctLetters.push(action.payload);
            },
            // Add wrong inputted letters to the wrongLetters array
            addWrongLetter: (state, action) => {
                state.wrongLetters.push(action.payload);
            },
            // Add all inputted letters to the usedLetters array
            addUsedLetter: (state, action) => {
                state.usedLetters.push(action.payload);
            },
            // Check for a win or lose result - This will trigger the end of game popup
            checkWinOrLoose: (state) => {

                // Initially set the status as a win
                let status = 'win';

                // Check for win
                // If any of the letters in word don't match the letters
                // in correctLetters then state the status as empty
                state.word.split('').forEach(letter => {
                    if(!state.correctLetters.includes(letter)){
                        status = '';
                    }
                });
                
                // Check for lose
                if(state.attemptsLeft === 0) {
                    status = 'lose'; // If there have been 6 attempts then set the status to lose
                }

                // Set the state gameStatus to status
                state.gameStatus = status;
            },
            // Reset the game - set all state values back to initial values
            resetGame: (state) => {
                state.gameStatus = '';
                state.attemptsLeft = 6;
                state.correctLetters = [];
                state.wrongLetters = [];
                state.usedLetters = [];
            }
        },

});

export const { updateAttemptsLeft, getRandomWord, addCorrectLetter, addWrongLetter, addUsedLetter, checkWinOrLoose, resetGame } = hangmanSlice.actions;

export default hangmanSlice.reducer;

