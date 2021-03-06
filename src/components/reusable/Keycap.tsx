import styles from "../../styles/reusable/_key.module.scss";
import { BoxStatus } from "../constants";

interface KeycapProps {
  char: string;
  state?: BoxStatus;
}

const handleKeybutton = (letter: string) => {
  return console.log(letter);
};

const Keycap = ({ char }: KeycapProps) => {
  return <button className={`${styles.keycap}`}>{char}</button>;
};

export default Keycap;
