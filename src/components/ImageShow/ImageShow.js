import styles from './ImageShow.module.css';
import zdjZamek from '../../jpg/karpniki139.png'


function ImageShow (props) {
    return (
      
        <div className={` ${styles['img-container']} ${props.displayImg && styles.invalid} `}>
            <img src={zdjZamek} alt="karpniki zamek" />
            <p>Zamek Karpniki 2022 <span className={styles['copy-sym']}>&copy;</span></p>
        </div>
    )
}

export default ImageShow;