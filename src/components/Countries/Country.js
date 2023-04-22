import { Link } from "react-router-dom";
import BackButton from "../UI/BackButton";
import ProgressiveImg from "../UI/ProgressiveImg";
import styles from "./Country.module.css";

const Country = () => {
    return <>
        <div className={styles["back-btn-container"]}>
            <Link to="/">
                <BackButton />
            </Link>
        </div>
        
        <div className={styles.info}>
            <div className={styles.image}>
                <ProgressiveImg src="https://flagcdn.com/be.svg" alt="country falg" />
            </div>
            <div className={styles.detail}>
                <h1 className={styles.title}>Belgium</h1>
                <div className={styles["dl-container"]}>
                    <div className={styles.first}>
                        <dl>
                            <dt>Native Name:</dt>
                            <dd>Belgie</dd>
                        </dl>
                        <dl>
                            <dt>Population:</dt>
                            <dd>11,319,511</dd>
                        </dl>
                        <dl>
                            <dt>Region:</dt>
                            <dd>Europe</dd>
                        </dl>
                        <dl>
                            <dt>Sub Region:</dt>
                            <dd>Western Europe</dd>
                        </dl>
                        <dl>
                            <dt>capital:</dt>
                            <dd>Brussele</dd>
                        </dl>
                    </div>
                    <div className={styles.second}>
                        <dl>
                            <dt>Top Level Domain:</dt>
                            <dd>.be</dd>
                        </dl>
                        <dl>
                            <dt>Currencies:</dt>
                            <dd>Euro</dd>
                        </dl>
                        <dl>
                            <dt>Languages:</dt>
                            <dd>Duch, French, German</dd>
                        </dl>
                    </div>
                </div>
                <div className={styles.borders}>
                    <h3 className={styles["sub-title"]}>
                        Border Countries:
                    </h3>
                    <div className={styles["border-items"]}>
                        <div className={styles.border}>
                            France
                        </div>
                        <div className={styles.border}>
                            Germany
                        </div>
                        <div className={styles.border}>
                            Netherlands
                        </div>
                        <div className={styles.border}>
                            Netherlands
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Country;