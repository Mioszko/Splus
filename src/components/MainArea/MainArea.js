import { useState } from "react";

import { useDrag } from "react-use-gesture";

import "./MainArea.css";

import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import ImageShow from "../ImageShow/ImageShow";
import ProjectText from "./ProjectText";
import ProjectImage from "./ProjectImage";

function MainArea() {
  /*drag and drop */
  const [textPos, setTextPos] = useState({ x: 500, y: 100 });
  const [imgPos, setImgPos] = useState({ x: 550, y: 150 });

  const bindTextPos = useDrag((params) => {
    setTextPos({
      x: params.offset[0],
      y: params.offset[1],
    });
  });

  const bindImgPos = useDrag((params) => {
    setImgPos({
      x: params.offset[0],
      y: params.offset[1],
    });
  });
  /*drag and drop */

  /*wciśnięcie hamburger menu schowa <Menu> i <ImageShow> */
  const [isValid, setIsValid] = useState(false);

  const displayReceived = () => {
    setIsValid(true);
    if (isValid === true) {
      setIsValid(false);
    }
  };
  /*wciśnięcie hamburger menu schowa <Menu> i <ImageShow> */

  const [isValid2, setIsValid2] = useState(false);
  const [isValid3, setIsValid3] = useState(false);

  // const clickHandler = () => {
  //   console.log('ye')
  //   console.log(display)
  // }

  const [project, setProject] = useState({
    id: "",
    title: "",
    text: "",
  });

  const [projectImg, setProjectImg] = useState({
    key: "",
    id: "",
    title: "",
    text: "",
    image: "",
  });

  const showInfoBox = (projectInfo) => {
    setIsValid2(true);
    setProject((prevState) => {
      return {
        ...prevState,
        id: projectInfo.id,
        title: projectInfo.title,
        text: projectInfo.text,
      };
    });
  };

  const showImgBox = (projectInfo) => {
    setIsValid3(true);
    setProjectImg((prevState) => {
      return {
        ...prevState,
        keyId: projectInfo.keyId,
        id: projectInfo.id,
        title: projectInfo.title,
        text: projectInfo.text,
        image: projectInfo.image,
      };
    });
  };

  const closeInfoBox = () => {
    setIsValid2(false);
  };

  const closeImgBox = () => {
    setIsValid3(false);
  };

  // const showInfoBox = (projectInfo) => {
  //  setProject({
  //     id: projectInfo.id,
  //     title: projectInfo.title,
  //     text: projectInfo.text,
  //   }
  //  );

  //  console.log(project);
  // };

  return (
    <div className="container">
      <Navigation displayPass={displayReceived} />
      <div className="main-container">
        <Menu
          displayMenu={isValid}
          showInfoBox={showInfoBox}
          showImgBox={showImgBox}
        />
        <ImageShow displayImg={isValid} />
        {/* <ProjectText /> */}

        <div
          {...bindTextPos()}
          style={{
            position: "absolute",
            top: textPos.y,
            left: textPos.x,
          }}
        >
          <ProjectText
            isValid2={isValid2}
            key={project.id}
            id={project.id}
            title={project.title}
            text={project.text}
            closeInfoBox={closeInfoBox}
          />
        </div>

        <div
          {...bindImgPos()}
          style={{
            position: "absolute",
            top: imgPos.y,
            left: imgPos.x,
          }}
        >
          <ProjectImage
            isValid3={isValid3}
            key={projectImg.keyId}
            id={projectImg.id}
            title={projectImg.title}
            image={projectImg.image}
            text={projectImg.text}
            closeImgBox={closeImgBox}
          />
        </div>
      </div>
    </div>
  );
}

export default MainArea;
