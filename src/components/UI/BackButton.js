import {ReactComponent as BackIcon} from "../../assets/images/back.svg";
import styles from "./BackButton.module.css";
const BackButton = () => {
    return <div className={styles.container}>
        <BackIcon aria-hidden="true" focusable="false" />
        <span aria-label="back to homepage">Back</span>
    </div>
}

export default BackButton;