import styles from "../styles/InputNumber.module.css";

interface Props {
  text: string;
  value: number;
  handleChange: (newValue: number) => void;
}

export default function InputNumber(props: Props) {
  const dec = (e) => props.handleChange(props.value - 1);
  const inc = (e) => props.handleChange(props.value + 1);

  return (
    <div className={styles.inputNumber}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={dec}>
          -
        </button>
        <button className={styles.btn} onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
}
