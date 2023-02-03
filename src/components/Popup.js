import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch from redux
import { resetGame } from '../store/hangman'; // Import the resetGame reducer from the hangman slice store

const Popup = (props) => {

    const word = useSelector((state) => state.hangman.word); // Get the word from hangman state
    const gameStatus = useSelector((state) => state.hangman.gameStatus); // Get the game status from hangman state

    const modal = document.querySelector(".modal"); // Get the modal by class
    const overlay = document.querySelector(".overlay"); // Get the modal overlay by class

    const dispatch = useDispatch(); // Set the disptach

    // Function to close the modal
    const closeModal =  () => {
        // Hide the modal
        modal.classList.add("hidden");
        // Hide the modal overlay
        overlay.classList.add("hidden");

        // Set a random word in the hangman reducer
        dispatch(resetGame());
        
        // Reset the random word
        props.randomWord();
    };

    // Function to handle the click play again button click
    const handlePlayAgain = () => {
        // Set a random word in the hangman reducer
        dispatch(resetGame());
    }

    const Message = () => {
        // Popup message to show if the user has won the game by guessing all the correct letters
        if (gameStatus === 'win') {
            return (
                <div className='text-center'>
                    <h2 id='popupModel' className='h1 my-4'>Congratulations - You Won! <span>&#127881;</span></h2>
                    <div className='m-5'>
                        <button type="button" onClick={() => {handlePlayAgain(); props.randomWord();}} className='btn btn-dark btn-lg'>Play Again</button>
                    </div>
                </div>
            )
        }
        // Popup message to show if the user has lost the game by using all their attempts
        if (gameStatus === 'lose') {
            return (
                <div className='text-center'>
                    <h2 id='popupModel' className='h1 my-4'>Sorry - You lost! <span>&#128532;</span></h2>
                    <h4 className='my-3'>The word was {word}!</h4>
                    <p className='my-3'>Better luck next time.</p>
                    <div>
                        <button type="button" onClick={() => {handlePlayAgain(); props.randomWord();}} className='btn btn-dark btn-lg'>Play Again</button>
                    </div>
                </div>
            )
        }
    }

    return (
        // Popup Modal
        // Pop up to dispaly results
        <section id='popupModal'>
            <div className={'modal ' + (gameStatus === '' ? 'hidden' : '')} >
                <div className="flex">
                    <button className='btn-close' onClick={closeModal}></button>
                </div>
                <div className='popupBody'>
                    <Message />
                </div>
            </div>

            <div className={'overlay ' + (gameStatus === '' ? 'hidden' : '')}></div>
        </section>
        // End Popup Modal
    );
};

export default Popup;