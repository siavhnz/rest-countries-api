import { useCallback, useEffect, useReducer, useRef } from "react";
import {ReactComponent as SearchIcon} from "../../assets/images/search.svg";
import {ReactComponent as SpinnerIcon } from "../../assets/images/spinner.svg";
import styles from "./Input.module.css";
import { Form, useLoaderData, useNavigation, useSubmit } from "react-router-dom";

const initialSearchData = {
    value: "",
    changed: false,
}

const searchReducer = (state, action) => {
    if(action.type === "CHANGED") {
        return {
            value: action.payload,
            changed: true,
        }
    }
    return state;
}


const InputCopy = () => {

    const { q } = useLoaderData();

    const navigation = useNavigation();
    const [state, dispatch] = useReducer(searchReducer, initialSearchData);
    const submit = useSubmit();
    let inputRef = useRef();

    const searching = navigation.location && 
    new URLSearchParams(navigation.location.search).has("q");

    // const searchHandler = useCallback(() => {
    //     let formData = new FormData();
    //     formData.append("q", state.value);
    //     console.log("submit");
    //     submit(formData);
    // }, [state.value])

    useEffect(() => {
        const timerIdentifier = setTimeout(() => {

            if(state.changed) {
                let formData = new FormData();
                formData.append("q", state.value);
                console.log("submit");
                submit(formData);
            }
        }, 500);

        return () => {
            clearTimeout(timerIdentifier);
        }
    // Adding submit as a dependency make component rerender
    // and load data from server again.
    }, [state]);

    useEffect(() => {
        inputRef.current.value = q; 
    }, [q]);

    return <Form className={styles.input}>
        {
            searching ? 
            <SpinnerIcon className={styles.spinner} alt="" aria-hidden="true" focusable="false" />
            : 
            <SearchIcon alt="" aria-hidden="true" focusable="false" />
        }
        <input 
            value={state.value}
            onChange={
                (event) => {
                    dispatch({
                        type: "CHANGED",
                        payload: event.target.value
                    })
                    //submit(event.currentTarget.form)
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

export default InputCopy;