import Input from "./Input";
import Region from "./Region";
import List from "./List";

import styles from "./index.module.css";

const Countries = () => {
    return (
        <div>
            <div className={styles["interaction-container"]}>
                <Input />
                <Region />
            </div>
            <List />
        </div>
    );
}

export default Countries;