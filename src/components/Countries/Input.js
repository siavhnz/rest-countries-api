import { useEffect, useRef } from "react";
import {ReactComponent as SearchIcon} from "../../assets/images/search.svg";
import {ReactComponent as SpinnerIcon } from "../../assets/images/spinner.svg";
import styles from "./Input.module.css";
import { Form, useLoaderData, useNavigation, useSubmit } from "react-router-dom";


const Input = () => {

    const { q } = useLoaderData();

    const navigation = useNavigation();
    const submit = useSubmit();
    let inputRef = useRef();

    const searching = navigation.location && 
    new URLSearchParams(navigation.location.search).has("q");

    useEffect(() => {
        inputRef.current.value = q; 
    }, [q]);

    return <Form className={styles.input}>
        {
            searching ? 
            <SpinnerIcon className={styles.spinner} aria-hidden="true" focusable="false" />
            : 
            <SearchIcon alt="" aria-hidden="true" focusable="false" />
        }
        <input 
            defaultValue={q}
            onChange={
                (event) => {
                    submit(event.currentTarget.form)
                }
            }
            type="search"
            name="q"
            ref={inputRef}
            placeholder="Search for a country..."
            aria-label="Search for a country"
        />
    </Form>
}

export default Input;