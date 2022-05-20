import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import DoorModel from "../../../model/door";
import styles from "../../../styles/Game.module.css";

export default function Game(props) {
  const router = useRouter();
  const [arrDoors, setArrDoors] = useState<DoorModel[]>([]);
  const [isValid, setisValid] = useState<boolean>(false);
  useEffect(() => {
    const { doors, hasGift } = router?.query;
    const validateQtdDoors = +doors >= 3 && +doors <= 100;
    const validateHasGift = +hasGift >= 1 && +hasGift <= +doors;

    setisValid(validateQtdDoors && validateHasGift);
  }, [arrDoors]);

  useEffect(() => {
    const { doors, hasGift } = router?.query;
    setArrDoors(createDoors(+doors, +hasGift));
  }, [router?.query]);

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {isValid &&
          arrDoors.length &&
          arrDoors.map((door, idx) => (
            <Door
              key={idx}
              value={door}
              handleChange={(newDoor) =>
                setArrDoors(updateDoors(arrDoors, newDoor))
              }
            />
          ))}
      </div>
      {!isValid && <h3>Please enter with valid values</h3>}
      <div className={styles.buttons}>
        <Link href={"/"}>
          <button>Restart</button>
        </Link>
      </div>
    </div>
  );
}
