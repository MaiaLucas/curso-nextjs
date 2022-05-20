import styles from "../styles/Door.module.css";
import DoorModel from "../model/door";
import Gift from "../components/Gift";

interface DoorProps {
  value: DoorModel;
  handleChange?: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const selecionadaStyle =
    door.selecionada && !door.aberta ? styles.selecionada : "";

  const handleSelection = (e) => {
    props.handleChange(door.alternarSelecao());
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    props.handleChange(door.abrir());
  };

  return (
    <div className={styles.area} onClick={handleSelection}>
      <div className={`${styles.frame} ${selecionadaStyle}`}>
        {!door.aberta && (
          <div className={styles.porta}>
            <div className={styles.numero}>{door.numero}</div>
            <div className={styles.macaneta} onClick={handleOpen}></div>
          </div>
        )}
        {door.temPresente && door.aberta ? <Gift /> : false}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
