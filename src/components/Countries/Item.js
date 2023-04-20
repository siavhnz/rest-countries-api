import { Link } from "react-router-dom";

const Item = ({alpha3Code, flag, name, population, region, capital}) => {
    return <div>
        <Link to={`country/${alpha3Code}`}>
            <img src={flag} alt={name} width="150" />
        </Link>
        <Link to={`country/${alpha3Code}`}>
            <p>{name}</p>
        </Link>
        <p>population: {population}</p>
        <p>region: {region}</p>
        <p>capital: {capital}</p>
    </div>
}

export default Item;