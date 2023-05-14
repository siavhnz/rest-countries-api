import { createContext, useState } from "react";

export const AppContext = createContext({
    light: true,
    onChangeTheme: () => {}
})


const AppContextProvider = ({children}) => {

    const [theme, setTheme] = useState({
        light: true,
    })

    const changeTheme = () => {
        setTheme((prevState) => {
            console.log(prevState)
            return {light: !prevState.light}
        })
    }

    const value = {
        light: theme.light,
        onChangeTheme: changeTheme
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}   

export default AppContextProvider;