import React from "react";
import { useState } from "react";
import styles from "./Menu.module.css";

import Card from "./UI/Card";
import News from "./News.js";
import Projects from "./Projects.js";
import Practise from "./Practise";
import Contact from "./Contact";

const Menu = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [isValid2, setIsValid2] = useState(true);
  const [isValid3, setIsValid3] = useState(true);
  const [isValid4, setIsValid4] = useState(true);

  // const visibleCard = [isValid, isValid2, isValid3, isValid4]
  // const [isValidCard, setIsValidCard] = useState(true);


  // if(visibleCard.includes(false)) {
  // setIsValidCard(false)
  // }

  // console.log(isValidCard)



  // const displayNone = () => {
  //   setIsValid(true);
  //   setIsValid2(true);
  //   setIsValid3(true);
  //   setIsValid4(true);
  // }


  const displayNewsHandler = () => {
    setIsValid(false);
    if (isValid === false) {
      setIsValid(true);
    }
    setIsValid2(true);
    setIsValid3(true);
    setIsValid4(true);
  };

  const displayProjectHandler = () => {
    setIsValid2(false);
    if (isValid2 === false) {
      setIsValid2(true);
    }
    setIsValid(true);
    setIsValid3(true);
    setIsValid4(true);
  };

  const displayPracticeHandler = () => {
    setIsValid3(false);
    if (isValid3 === false) {
      setIsValid3(true);
    }
    setIsValid(true);
    setIsValid2(true);
    setIsValid4(true);
  };

  const displayContactHandler = () => {
    setIsValid4(false);
    if (isValid4 === false) {
      setIsValid4(true);
    }
    setIsValid(true);
    setIsValid2(true);
    setIsValid3(true);
  };

  return (
    <div>
      <div
        className={`${styles["main-nav-wrapper"]} ${
          props.displayMenu && styles.invalid
        }`}
      >
        <nav className={styles["nav-wrapper"]}>
          <ul className={styles.ul}>
            <li
              className={`${styles.li} ${!isValid && styles.minus}`}
              onClick={displayNewsHandler}
            >
              <a href="#">
                {/* <a href="#" onClick={displayClickHandler} id="remove-after"> */}
                NEWS <span>+</span>
              </a>
            </li>

            <li
              className={`${styles.li} ${!isValid2 && styles.minus}`}
              onClick={displayProjectHandler}
            >
              <a href="#">PROJECTS</a>
            </li>
            <li
              className={`${styles.li} ${!isValid3 && styles.minus}`}
              onClick={displayPracticeHandler}
            >
              <a href="#">PRACTICE</a>
            </li>
            <li
              className={`${styles.li} ${!isValid4 && styles.minus}`}
              onClick={displayContactHandler}
            >
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>

        <Card className={`${isValid && styles.invalid}`}>
          <News />
        </Card>
        <Card className={`${isValid2 && styles.invalid}`}>
          <Projects showInfoBox={props.showInfoBox} showImgBox={props.showImgBox}/>
        </Card>
        <Card className={`${isValid3 && styles.invalid}`}>
          <Practise />
        </Card>
        <Card className={`${isValid4 && styles.invalid}`}>
          <Contact />
        </Card>
      </div>
    </div>
  );
};
export default Menu;

// import React from "react";
// import { useState } from "react";

// import "./Menu.css";
// import News from "./News.js";
// import Projects from "./Projects.js";

// const Menu = () => {

//   const [isValid, setIsValid] = useState(true);

//   const displayClickHandler = () => {
//     setIsValid(false)

//     if (isValid === false) {
//       setIsValid(true)
//     }
//   };

//   return (
//     <div>

//     <div className="main-nav-wrapper">
//       <nav className="nav-wrapper">
//         <ul>
//           <li>
//             <a href="#" onClick={displayClickHandler} id="remove-after">
//               NEWS <span>+</span>
//             </a>
//           </li>
//           <li>
//             <a href="#" onClick={displayClickHandler}>
//               PROJECTS
//             </a>
//           </li>
//           <li>
//             <a href="#" onClick={displayClickHandler}>
//               PRACTICE
//             </a>
//           </li>
//           <li>
//             <a href="#" onClick={displayClickHandler}>
//               CONTACT
//             </a>
//           </li>
//         </ul>
//       </nav>

//       <News display={isValid}/>
//       <Projects display={isValid}/>
//     </div>

//     </div>
//   );
// };
// export default Menu;
