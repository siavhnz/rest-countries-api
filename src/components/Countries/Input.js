import {ReactComponent as SearchIcon} from "../../assets/images/search.svg";
import styles from "./Input.module.css";

const Input = () => {
    return <div className={styles.input}>
        <SearchIcon alt="" aria-hidden="true" focusable="false" />
        <input type="text" placeholder="Search for a country..." />
    </div>
}

export default Input;