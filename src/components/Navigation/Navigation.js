import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const clickDisplayHandler = () => {
    props.displayPass();
  };

  return (
    <header className={styles["main-header"]}>
      <button className={styles["toggle-button"]} onClick={clickDisplayHandler}>
        <span className={styles["toggle-button__bar"]}></span>
        <span className={styles["toggle-button__bar"]}></span>
        <span className={styles["toggle-button__bar"]}></span>
        <span className={styles["moj"]}></span>
      </button>
    </header>
  );
};

export default Navigation;
