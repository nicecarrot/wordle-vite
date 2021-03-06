import styles from "../../../styles/reusable/_key.module.scss";
import Keycap from "../../reusable/Keycap";
import { KEYBOARD_TOP, KEYBOARD_MID, KEYBOARD_BOT } from "../../constants";

const KEYARRAY = [KEYBOARD_TOP, KEYBOARD_MID, KEYBOARD_BOT];

const Keyboard = () => {
  const keyboard = KEYARRAY.map((row, idx: number) => (
    <div key={idx} className={styles.keyboard_container}>
      <div className={styles.keyboard_row}>
        {row.map((char: string, idx: number) => {
          return <Keycap char={char} key={idx}></Keycap>;
        })}
      </div>
    </div>
  ));
  return <div>{keyboard}</div>;
};

export default Keyboard;
