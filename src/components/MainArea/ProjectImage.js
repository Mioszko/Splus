import styles from "./ProjectImage.module.css";

const ProjectImage = (props) => {

const closeBox = () => {
    props.closeImgBox()
}

console.log(props.image)

    return (

        <div className={`${styles.container} ${!props.isValid3 && styles.invalid}`}>
            <header className={styles.header}>
            <span className={styles["span-title"]}>{props.id} {props.title}</span>
            <span className={styles["span-close"]} onClick={closeBox}>X</span>
            </header>
           
            <section className={styles.section}>
                {/* <header>
                    <h3>{props.title}</h3>
                    <h3>{props.title}</h3>
                    <h3>{props.title}</h3>
                </header> */}
        
                <img src={props.image} alt="karpniki zamek" />
                {/* <p>{props.text}</p> */}
            </section>
           
        </div>
        
    )
}


export default ProjectImage;


