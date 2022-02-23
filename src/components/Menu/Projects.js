import styles from "./Projects.module.css";
import ProjectsList from "./ProjectsList";
// import zdjZamek from '../../jpg/karpniki139.png'
import karpniki from '../../jpg/40.jpg'
import awicenny from '../../jpg/BIUROWIECsmall.jpg'
import nieregularny from '../../jpg/nieregularny.jpg'
import portos1 from '../../jpg/portos1.jpg'
import zehnder from '../../jpg/zehnder.png'


const Projects = (props) => {
  // console.log(props.display)

  const projects_data = [
    {
      keyId: Math.random(),
      id: "184",
      title: "KARPNIKI SPA & SWIMMING POOL",
      date: new Date(2021, 2, 28),
      image: karpniki,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      keyId: Math.random(),
      id: "163",
      title: "AWICENNY OFFICE BUILDING",
      date: new Date(2021, 2, 28),
      image: awicenny,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      keyId: Math.random(),
      id: "148",
      title: "MLADZ SINGLE-FAMILY HOME",
      date: new Date(2021, 2, 28),
      image: nieregularny,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      keyId: Math.random(),
      id: "123",
      title: "KALISZ PORTOS FACTORY",
      date: new Date(2021, 2, 28),
      image: portos1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },

    {
      keyId: Math.random(),
      id: "115",
      title: "BOLESŁAWIEC ZEHNDER",
      date: new Date(2021, 2, 28),
      image: zehnder,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];


  return (
    <div className={` ${styles.container} `}>
      <h2>Projects</h2>
      
      <ul className={styles["ul-container"]}>
        {projects_data.map((projects) => (
          <ProjectsList
            key={projects.keyId}
            id={projects.id}
            title={projects.title}
            date={projects.date}
            text={projects.text}
            image={projects.image}
            showInfoBox={props.showInfoBox}
            
            showImgBox={props.showImgBox}
          />
        ))}

        {/* <li className={` ${styles["li-container"]} `}>
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
        </li> */}
      </ul>
    </div>
  );
};

export default Projects;
