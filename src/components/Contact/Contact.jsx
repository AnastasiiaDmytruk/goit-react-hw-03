import styles from "./Contact.module.css";
import { IoCall } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
export const Contact = ({ name, number, id,onDeleteContact }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <IoPerson className={styles.icon} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.item}>
          <IoCall className={styles.icon} />
          <span className={styles.name}> {number}</span>
        </div>
      </div>
      <button className={styles.button} type="button" onClick={()=>onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};
