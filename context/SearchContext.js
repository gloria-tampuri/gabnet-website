import { createContext, useState } from "react";

export const SearchContext = createContext(null)

export const SearchContextProvider=({children})=>{

    const[showSearch, setShowSearch] = useState(false)

    const showSearchHandler=()=>{
    setShowSearch(true)
    }

    
   const hideSearchHandler=()=>{
        setShowSearch(false)
    }

    return(
        <SearchContext.Provider value={{showSearch, showSearchHandler, hideSearchHandler}}>

            {children}
        </SearchContext.Provider>
    )

}


