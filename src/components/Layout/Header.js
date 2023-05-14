import { useContext, useEffect } from "react";
import { ReactComponent as MoonIcon} from "../../assets/images/moon.svg";
import { ReactComponent as MoonFilledIcon } from "../../assets/images/moon-filled.svg";
import Wrapper from "./Wrapper";
import styles from "./Header.module.css";
import { AppContext } from "../../store/context/app-context";

const Header = () => {
  // Handle theme functionality
  const theme = useContext(AppContext)
  
  const handleThemeChange = () => {
    theme.onChangeTheme();
  }

  /**
   * Add theme to the body tag of document.
   * I used module css so every css class (e.g., .body-img) 
   * transform to unique name like (.Header_body-img__w5LA7)
   * so if add a class like .theme-light to body and in a module
   * use (.theme-light .body-img) both classes transform but
   * in body tag still have .theme-light and app doesn't work
   * instead by using (body[data-theme="theme-light"] .body-img)
   * first we don't need to pass theme to every component and
   * second (body[data-theme="theme-light"]) doesn't transform.
   * Check src/components/Layout/Header.module.css for this approch.
   */
  useEffect(() => {
    if(theme.light){
      document.body.dataset["theme"] = "theme-light";
    } else {
      document.body.dataset["theme"] = "theme-dark";
    }
  }, [theme.light])

  console.log(theme)

    return <header>
        <Wrapper cssClass={styles.header}>
            <div className={styles.inner}>
                <h1 className={styles.title}>
                    Where in the world?
                </h1>
                <div onClick={ handleThemeChange } className={styles["theme-mode"]}>
                    { theme.light ? <MoonIcon aria-hidden="true" focusable="false" /> : <MoonFilledIcon aria-hidden="true" focusable="false"/> }
                    <span> 
                        Dark Mode
                    </span>
                </div>
            </div>
        </Wrapper>
    </header>
}

export default Header;