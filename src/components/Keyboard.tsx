import Styles from "./Keyboard.module.css";

const Keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Keyboard() {
  return (
    <div className={Styles.layout}>
      {Keys.map((key, index) => (
        <button key={index} className={`${Styles.keys}`}>
          {key}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
