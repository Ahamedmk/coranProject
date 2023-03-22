import React, {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext ();

const ThemeContextProvider = props => {

    const [theme, setTheme] = useState(4)
    const [tot, setTot] = useState("")

    // -----------------------------mettre dans le local storage--------------
    const [numberPage, setNumberPage] = useState ( () => {const sauve = localStorage.getItem ( 'items' );
    const initiale = JSON.parse ( sauve );
     return initiale || "";});
    //  localStorage.removeItem('items')
     useEffect(() =>{
        localStorage.setItem('items', JSON.stringify(numberPage));
    }, [numberPage]);
    
    const changePage = el => {
        setNumberPage(el.target.value)
    }
   
    return (
        <ThemeContext.Provider value={{theme, numberPage, changePage, setNumberPage, tot, setTot}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;