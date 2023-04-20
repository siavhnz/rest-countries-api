import data from "../../region.json";

const Region = () => {
    return <select>
        <option>
            Filter by Region
        </option>
        {data.map((item) => {
            return <option key={item.region}>
                {item.region}
            </option>
        })}
    </select>
}

export default Region;