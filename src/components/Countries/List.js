import data from "../../countries.json";
import Item from "./Item";

const List = () => {

    const Content = data.map((item) => {
        return <Item 
            key={item.alpha3Code}
            alpha3Code={item.alpha3Code.toLowerCase()}
            flag={item.flag}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}>
        </Item>
    })

    return <>{Content}</>
    
}

export default List;