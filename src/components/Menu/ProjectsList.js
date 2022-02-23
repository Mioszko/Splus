import styles from "./ProjectsList.module.css";

const ProjectsList = (props) => {
  const infoBox = () => {
    props.showInfoBox(props);
  };

  const imgBox = () => {
    props.showImgBox(props)
  }

  return (
    <li className={` ${styles["li-container"]} `}>
      {props.id} {props.title}
      <ul className={styles.ul}>
        <li className={styles.li}>
          <>&gt;</>{" "}
          <a className={styles.hover} onClick={infoBox}>
            TEXT
          </a>{" "}
          |<>&nbsp;</>
        </li>
        <li className={styles.li}>
          <a className={styles.hover} onClick={imgBox}>
            IMAGE
          </a>
        </li>
      </ul>
    </li>
  );
};

export default ProjectsList;
