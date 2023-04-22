import { useEffect, useState } from "react";

import styles from "./Select.module.css";



/**
 * Inspired by https://codesandbox.io/s/react-custom-select-bpsi7?file=/src/CustomSelect.js:401-462
 */
const Select = ({defaultTxt, showList, list}) => {
    const [state, setState] = useState({
        defaultTxt,
        showList,
    });

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    });

    const handleClickOutside = e => {
        
        if (
          !e.target.parentNode.classList.contains(styles["text-container"]) &&
          !e.target.classList.contains(styles["text-container"]) &&
          !e.target.classList.contains(styles["select-option"])
        ) {
          setState((prevState) => {
            return {
                ...prevState,
                showList: false,
            }
          });
        }
      }; 

    const handleToggleList = () => {
        setState((prevState) => {
            return {
                ...prevState,
                showList: !prevState.showList
            }
        })
    }

    const handleOptionClick = e => {
        setState({
          defaultTxt: e.target.getAttribute("data-value"),
          showList: false
        });
    };

    return (
        <div className={styles["select-container"]}>
            <div
                className={styles["text-container"]}
                onClick={handleToggleList}
                >
                    <span>{state.defaultTxt}</span>
                    <span className={state.showList ? `${styles.arrow} ${styles.active}` : styles.arrow}></span>
            </div>
            {
                state.showList && (
                    <ul className={styles["select-options"]}>
                        <li onClick={handleOptionClick}
                            className={styles["select-option"]}
                            data-value={defaultTxt}> 
                            {defaultTxt}
                        </li>
                        {
                            list.map((item, index) => {
                                return (
                                    <li 
                                        onClick={handleOptionClick}
                                        key={index} 
                                        data-value={item} 
                                        className={styles["select-option"]}
                                    >
                                            {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
        </div>
    );
    
    
    
}

export default Select;