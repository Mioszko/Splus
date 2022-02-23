import styles from "./Projects.module.css";

const Projects = () => {
  // console.log(props.display)

  const projects_data = [
    {
      id: "183",
      title: "KARPNIKI SPA & SWIMMING POOL",
      date: new Date(2021, 2, 28),
      txt: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      ),
    },
    {
      id: "163",
      title: "AWICENNY OFFICE BUILDING",
      date: new Date(2021, 2, 28),
      txt: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      ),
    },
    {
      id: "148",
      title: "MLADZ SINGLE-FAMILY HOME",
      date: new Date(2021, 2, 28),
      txt: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      ),
    },
    {
      id: "123",
      title: "KALISZ PORTOS FACTORY",
      date: new Date(2021, 2, 28),
      txt: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      ),
    },

    {
      id: "115",
      title: "BOLESŁAWIEC ZEHDER",
      date: new Date(2021, 2, 28),
      txt: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      ),
    },
  ];

  return (
    <div className={` ${styles.container} `}>
      <h1>Projects</h1>
      {/* <h1>Projects</h1> */}
      <ul className={styles["ul-container"]}>
        <li className={` ${styles["li-container"]} `}>
          184 KARPNIKI SPA & SWIMMING POOL
          <ul className={styles.ul}>
            <li className={styles.li}>
              <>&gt;</> <a className={styles.hover}>TEXT</a> |<>&nbsp;</>
            </li>
            <li className={styles.li}>
              <a className={styles.hover}>IMAGE</a>
            </li>
          </ul>
        </li>

        <li className={` ${styles["li-container"]}`}>
          163 AWICENNY OFFICE BUILDING
          <ul className={styles.ul}>
            <li className={styles.li}>
              <>&gt;</> <a className={styles.hover}>TEXT</a> |<>&nbsp;</>
            </li>
            <li className={styles.li}>
              <a className={styles.hover}>IMAGE</a>
            </li>
          </ul>
        </li>

        <li className={` ${styles["li-container"]} `}>
          148 MLADZ SINGLE-FAMILY HOME
          <ul className={styles.ul}>
            <li className={styles.li}>
              <>&gt;</> <a className={styles.hover}> TEXT</a> |<>&nbsp;</>
            </li>
            <li className={styles.li}>
              <a className={styles.hover}>IMAGE</a>
            </li>
          </ul>
        </li>

        <li className={` ${styles["li-container"]} `}>
          123 KALISZ PORTOS FACTORY
          <ul className={styles.ul}>
            <li className={styles.li}>
              <>&gt;</> <a className={styles.hover}>TEXT</a> |<>&nbsp;</>
            </li>
            <li className={styles.li}>
              <a className={styles.hover}>IMAGE</a>
            </li>
          </ul>
        </li>

        <li className={` ${styles["li-container"]}`}>
          115 BOLESŁAWIEC ZEHNDER
          <ul className={styles.ul}>
            <li className={styles.li}>
              <>&gt;</> <a className={styles.hover}>TEXT</a> |<>&nbsp;</>
            </li>
            <li className={styles.li}>
              <a className={styles.hover}>IMAGE</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
