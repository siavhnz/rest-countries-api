import { Link } from "react-router-dom";
import ProgressiveImg from "../UI/ProgressiveImg";
import PlaceholderImg from "../../assets/images/flag.png"
import styles from "./ListItem.module.css";

const ListItem = ({alpha3Code, flag, name, population, region, capital}) => {
    return <div className={styles.card}>
        <Link to={`country/${alpha3Code}`}>
            <ProgressiveImg 
            src={flag}
            placeholderSrc={PlaceholderImg}
            alt={name} 
            className={styles.flag} />
        </Link>
        <div className={styles["spec-container"]}>
            <Link to={`country/${alpha3Code}`}>
            <h2 className={styles.title}>{name}</h2>
            </Link>
            <dl className={styles.spec}>
                <dt>Population:</dt>
                <dd>{population}</dd>
            </dl>
            <dl className={styles.spec}>
                <dt>Region:</dt>
                <dd>{region}</dd>
            </dl>
            <dl className={styles.spec}>
                <dt>Capital:</dt>
                <dd>{capital}</dd>
            </dl>
        </div>
    </div>
}

export default ListItem;