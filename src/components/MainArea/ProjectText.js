import styles from "./ProjectText.module.css";

const ProjectText = (props) => {

const closeBox = () => {
    props.closeInfoBox()
}

    return (

        <div className={`${styles.container} ${!props.isValid2 && styles.invalid}`}>
            <header className={styles.header}>
            <span className={styles["span-title"]}>{props.id} {props.title}</span>
            <span className={styles["span-close"]} onClick={closeBox}>X</span>
            </header>
           
            <section className={styles.section}>
                <header>
                    <h3>{props.title}</h3>
                    <h3>{props.title}</h3>
                    <h3>{props.title}</h3>
                </header>
                <p>{props.text}</p>
            </section>
           
        </div>
        
    )
}


export default ProjectText;


