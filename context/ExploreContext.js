import { createContext, useState } from "react";

export const ExploreDropdownContext = createContext(null)

export const ExploreDropdownContextProvider=({children})=>{
         const[dropdown, setDropdown] =useState(false)

        const showDropdown=()=>{
            setDropdown(true)
        }

        const hideDropdown=()=>{
            setDropdown(false)
        }
 
    return(
        <ExploreDropdownContext.Provider  value={{dropdown, showDropdown, hideDropdown}}>

            {children}
        </ExploreDropdownContext.Provider>
    )
     
} 