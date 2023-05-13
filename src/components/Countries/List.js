
import ListItem from "./ListItem";
import styles from "./List.module.css";
import { useLoaderData, useNavigation } from "react-router-dom";
import { guardCountryData } from "../../store/utility/country-guard";

const List = () => {

    const { countries }  = useLoaderData();
    const navigation = useNavigation();
    
    console.log(countries[2])

    const Loading = <p>loading...</p>;
    const Content = countries.length ? countries.map((item) => {
        
        item = guardCountryData(item);
        
        return <ListItem 
            key={item.name}
            flag={item.flag}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}>
        </ListItem>

    }) : <p className={styles["no-content"]}>There is no country</p>

    return <div className={styles.container}>
        {
            navigation.state === "loading" ?
            Loading : Content
        }
    </div>
    
}

export default List;