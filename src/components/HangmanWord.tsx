import Styles from "./HangmanWord.module.css";
const word = "test";
const guessedLetters = ["t", "e", "g"];

function HangmanDrawing() {
  return (
    <div className={Styles.words}>
      {word.split("").map((char, index) => (
        <span key={index} className={Styles.char}>
          <span
            style={{
              visibility: guessedLetters.includes(char) ? "visible" : "hidden",
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanDrawing;
