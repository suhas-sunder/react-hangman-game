import Styles from "./HangmanDrawing.module.css";

function HangmanDrawing() {
  return (
    <div className={Styles.drawing}>
      <div className={Styles["top-bar"]}></div>
      <div className={Styles.anchor}></div>
      <div className={Styles.pole}></div>
      <div className={Styles.bar}></div>
      <div className={Styles.head}></div>
      <div className={Styles.body}></div>
      <div className={Styles["right-arm"]}></div>
      <div className={Styles["left-arm"]}></div>
      <div className={Styles["right-leg"]}></div>
      <div className={Styles["left-leg"]}></div>
    </div>
  );
}

export default HangmanDrawing;
