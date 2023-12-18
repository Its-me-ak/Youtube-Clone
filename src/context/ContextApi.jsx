import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [selectCategories, setSelectCategories] = useState('New');
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories])

    const fetchSelectedCategoryData = (query) =>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then((res) =>{
            console.log(res);
            // setSearchResult(res)
            setLoading(false);
        })
    }

    return (
        <Context.Provider value={{
            loading,
            searchResult, 
            selectCategories, 
            mobileMenu,
            setLoading,
            setSearchResult, 
            setSelectCategories, 
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}