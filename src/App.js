// Imports
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from redux
import { getRandomWord } from './store/hangman'; // Import getRandomwWord from the hangman slice
import './App.css';
import Rules from './components/Rules'; // Import the Rules component
import Header from './components/Header'; // Import the Header component
import Figure from './components/Figure'; // Import the Figure component
import Attempts from './components/Attempts'; // Import the Attempts component
import Word from './components/Word'; // Import the Word component
import wordsData from './assets/JSON/words.json'; // Import the words json file
import WrongLetters from './components/WrongLetters'; // Import the wrong letters component
import KeyBoard from './components/Keyboard'; // Import the wrong letters component
import Popup from './components/Popup'; // Import the Popup component

function App() {

  // Declare the dispact variable
  const dispatch = useDispatch();

  const randomWord = () => {
    // Create array of object keys
    const words = Object.keys(wordsData);

    // Generate random index based on number of words
    const randIndex = Math.floor(Math.random() * words.length);

    // Select a word from the array of words using the random index
    const randWord = words[randIndex].toUpperCase();

    // Set a random word in the hangman reducer
    dispatch(getRandomWord(randWord));
  }

  // Create a random word on first render only
  useEffect(() => {
      randomWord();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column text-center">
      <Rules />
      <Header />
      <div className='infoRow d-flex justify-content-between'>
        <WrongLetters />
        <Attempts />
      </div>
      <Figure />
      <Word />
      <KeyBoard randomWord={randomWord} /> {/* Send the random word function as a prop to be called for the child component */}
      <Popup randomWord={randomWord}/> {/* Send the random word function as a prop to be called for the child component */}
    </div>
  );
}

export default App;
