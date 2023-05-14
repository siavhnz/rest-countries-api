import { useEffect, useState, useRef } from "react";
import { useLoaderData, useNavigation, useSubmit } from "react-router-dom";

import {ReactComponent as SpinnerIcon } from "../../assets/images/spinner.svg";
import styles from "./Select.module.css";


/**
 * Inspired by https://codesandbox.io/s/react-custom-select-bpsi7?file=/src/CustomSelect.js:401-462
 */
const Select = ({defaultTxt, showList, list}) => {

    const { r } = useLoaderData();
    const [state, setState] = useState({
        text: defaultTxt,
        showList,
    });
    const selectRef = useRef();
    const submit = useSubmit();
    const navigation = useNavigation();

    const filtering = navigation.location && 
    new URLSearchParams(navigation.location.search).has("r");

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    });

    useEffect(() => {
        setState((prevState) => {
            return {
                ...prevState,
                text: r || defaultTxt,
            }
        })
    }, [r, defaultTxt])

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
        const value = e.target.getAttribute("data-value")
        

        // Prevent Load data on same value for second time
        if(value !== state.text){
            submit({
                "r": value !== defaultTxt ? value : ""
            });
        }
        
        setState({
          text: value,
          showList: false
        });


    };

    return (
        <div className={styles["select-container"]}>
            <div
                className={styles["text-container"]}
                onClick={handleToggleList}
                >
                    <span ref={selectRef}>{state.text}</span>
                    {
                        filtering ?
                        <SpinnerIcon className={styles.spinner} aria-hidden="true" focusable="false" />
                        :
                        <span className={state.showList ? `${styles.arrow} ${styles.active}` : styles.arrow}></span>
                    }
                    
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