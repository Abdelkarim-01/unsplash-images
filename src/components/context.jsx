import {createContext, useContext, useEffect, useState } from "react";

const AppContext=createContext();

export const AppProvider =({children}) => {
    const getInitialDarkMode=()=>{
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches ;
        const storedDarkMode=localStorage.getItem('darkTheme') === 'true' ;
        return storedDarkMode || prefersDarkMode ;
    }
    const [isDarkTheme,setIsDarkTheme]=useState(getInitialDarkMode())
    const [searchTerm,setSearchTerm]=useState('cat')


    const toggleDarkTheme = () =>{
        const newDarkTheme=!isDarkTheme
        const body=document.querySelector('body');
        body.classList.toggle('dark-theme',newDarkTheme);
        localStorage.setItem('darkTheme',newDarkTheme)
        setIsDarkTheme(newDarkTheme);
    }

    useEffect(()=>{
        document.body.classList.toggle('dark-theme',isDarkTheme);
    },[isDarkTheme])

    return <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>    
        {children}
    </AppContext.Provider>
}

export const useGlobalContext= () => useContext(AppContext) ;
