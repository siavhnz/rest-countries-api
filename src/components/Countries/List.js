import data from "../../countries.json";
import ListItem from "./ListItem";
import styles from "./List.module.css";

const List = () => {

    const Content = data.map((item) => {
        return <ListItem 
            key={item.alpha3Code}
            alpha3Code={item.alpha3Code.toLowerCase()}
            flag={item.flag}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}>
        </ListItem>
    })

    return <div className={styles.container}>{Content}</div>
    
}

export default List;