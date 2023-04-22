import { useState } from "react";
import MoonIcon from "../../assets/images/moon.svg";
import MoonFilledIcon from "../../assets/images/moon-filled.svg";
import Wrapper from "./Wrapper";
import styles from "./Header.module.css";

const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleThemeHandler = () => {
        setIsDarkMode((state) => {return !state});
    }

    return <header>
        <Wrapper cssClass={styles.header}>
            <h1 className={styles.title}>
                Where in the world?
            </h1>
            <div onClick={ toggleThemeHandler } className={styles["theme-mode"]}>
                <img src={ isDarkMode ? MoonFilledIcon : MoonIcon } alt="change theme mode" />
                <span> 
                    { isDarkMode ? "Light mode" : "Dark mode" }
                </span>
            </div>
        </Wrapper>
    </header>
}

export default Header;