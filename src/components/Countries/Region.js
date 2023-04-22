import Select from "../UI/Select";
import styles from "./Region.module.css";

const Region = () => {
    const data = [ "Africa", "America", "Asia", "Europe", "Oceania"];
    return <div className={styles.region}>
        <Select 
        showList = { false }
        defaultTxt="Filter by Region"
        list={data}
        />
    </div>
}

export default Region;