import { useState } from "react";
import words from "./words.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

import Styles from "./App.module.css";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles["text-result"]}>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />  
    </div>
  );
}

export default App;
