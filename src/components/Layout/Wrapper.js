import styles from "./Wrapper.module.css";

const Wrapper = ({children, cssClass}) => {

    const wrapperStyle = (cssClass) ? `${styles.wrapper} ${cssClass}` : styles.wrapper;

    return <div className={wrapperStyle}>
        {children}
    </div>
}

export default Wrapper;