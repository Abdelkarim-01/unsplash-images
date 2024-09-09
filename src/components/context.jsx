import {createContext, useContext, useState } from "react";

const AppContext=createContext();

export const AppProvider =({children}) => {
    const [isDarkTheme,setIsDarkTheme]=useState(false)

    const toggleDarkTheme = () =>{
        const newDarkTheme=!isDarkTheme
        const body=document.querySelector('body');
        body.classList.toggle('dark-theme',newDarkTheme);
        setIsDarkTheme(newDarkTheme);
    }
    
    return <AppContext.Provider value={{isDarkTheme,toggleDarkTheme}}>    
        {children}
    </AppContext.Provider>
}

export const useGlobalContext= () => useContext(AppContext) ;
