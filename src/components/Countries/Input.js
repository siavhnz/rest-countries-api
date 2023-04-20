import SearchIcon from "../../assets/images/search.svg";

const Input = () => {
    return <div>
        <img src={SearchIcon} width="32" alt="" aria-hidden="true" focusable="false" />
        <input type="text" placeholder="search for a country" />
    </div>
}

export default Input;