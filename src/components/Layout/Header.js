import { useState } from "react";
import MoonIcon from "../../assets/images/moon.svg";
import SunIcon from "../../assets/images/sun.svg";
import Wrapper from "./Wrapper";

const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleThemeHandler = () => {
        setIsDarkMode((state) => {return !state});
    }

    const Content =
        <Wrapper>
            <p>
                Where in the world
            </p>
            {
                isDarkMode && 
                <div onClick={ toggleThemeHandler }>
                    <img src={MoonIcon} alt="change theme to dark" width="32"  />
                    <span>dark mode</span>
                </div>
            }
            {
                !isDarkMode &&
                <div onClick={ toggleThemeHandler }>
                    <img src={SunIcon} alt="change theme to light" width="32" />
                    <span>light mode</span>
                </div>
            }
        </Wrapper>;

    return <header>
        { Content }
    </header>
}

export default Header;