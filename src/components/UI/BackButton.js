import { Link } from "react-router-dom";
import {ReactComponent as BackIcon} from "../../assets/images/back.svg";
import styles from "./BackButton.module.css";
const BackButton = () => {
    return <div className={styles.container}>
        <Link to="/">
            <BackIcon aria-hidden="true" focusable="false" />
            <span aria-label="back to homepage">Back</span>
        </Link>
    </div>
}

export default BackButton;