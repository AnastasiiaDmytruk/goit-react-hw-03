import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.lable}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
