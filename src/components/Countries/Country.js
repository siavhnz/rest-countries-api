import { useLoaderData } from "react-router-dom";
import BackButton from "../UI/BackButton";
import ProgressiveImg from "../UI/ProgressiveImg";
import styles from "./Country.module.css";
import { guardCountryData } from "../../store/utility/country-guard";
import Borders from "./Borders";

const Country = () => {

    let { country } = useLoaderData();
    country = guardCountryData(country[0]);


    return <>
        <div className={styles["back-btn-container"]}>
            <BackButton />
        </div>
        
        <div className={styles.info}>
            <div className={styles.image}>
                <ProgressiveImg src={country.flag} alt={`flag of ${country.name}`} />
            </div>
            <div className={styles.detail}>
                <h1 className={styles.title}>
                    {country.name}
                </h1>
                <div className={styles["dl-container"]}>
                    <div className={styles.first}>
                        <dl>
                            <dt>Native Name:</dt>
                            <dd>
                                {country.nativeName}
                            </dd>
                        </dl>
                        <dl>
                            <dt>Population:</dt>
                            <dd>
                                {
                                    Intl.NumberFormat("en-US").format(country.population)
                                }
                            </dd>
                        </dl>
                        <dl>
                            <dt>Region:</dt>
                            <dd>
                                {country.region}
                            </dd>
                        </dl>
                        <dl>
                            <dt>Sub Region:</dt>
                            <dd>
                                {country.subregion}
                            </dd>
                        </dl>
                        <dl>
                            <dt>Capital:</dt>
                            <dd>
                                {country.capital}
                            </dd>
                        </dl>
                    </div>
                    <div className={styles.second}>
                        <dl>
                            <dt>Top Level Domain:</dt>
                            <dd>{country.tld}</dd>
                        </dl>
                        <dl>
                            <dt>Currencies:</dt>
                            <dd>
                                {country.currencies.join(", ")}
                            </dd>
                        </dl>
                        <dl>
                            <dt>Languages:</dt>
                            <dd>
                                {country.languages.join(", ")}
                            </dd>
                        </dl>
                    </div>
                </div>
                <Borders cca3={country.borders} />
            </div>
        </div>
    </>
}

export default Country;