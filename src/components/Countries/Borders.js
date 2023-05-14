import { useEffect, useState } from "react";
import { API_URL } from "../../store/utility/api-url";
import { Link } from "react-router-dom";
import {ReactComponent as SpinnerIcon } from "../../assets/images/spinner.svg";

import styles from "./Borders.module.css";
import { guardCountryData } from "../../store/utility/country-guard";

const Borders = ({cca3}) => {

    const [state, setState] = useState({
        isLoading: true,
        data: []
    });
    
    useEffect( () => {

        async function getBorders () {
            if(cca3.length > 0){
                console.log("get data");
                const url = `${API_URL}alpha?codes=${cca3.join(",")}`;
                const res = await fetch(url);
                const data = await res.json();

                setState({
                    isLoading: false,
                    data: data
                });
            }
        }
        
        getBorders();


    }, [cca3]);

    const {isLoading, data } = state;

    if(isLoading && cca3.length > 0) {
        return <SpinnerIcon className={styles.spinner} aria-hidden="true" focusable="false" />                    
    }

    return  !isLoading && data.length > 0 &&
    <div className={styles.borders}>
        <h3 className={styles["sub-title"]}>
            Border Countries:
        </h3>
        <div className={styles["border-items"]}>
            {
                data.map((item) => {
                    item = guardCountryData(item);
                    const link = item.name.toLowerCase().split(" ").join("_")
                    return <Link key={item.name} to={`/./country/${link}`}>
                        <div className={styles.border}>
                            {item.name}
                        </div>
                    </Link>
                })
            }
        </div>
    </div>
}

export default Borders;