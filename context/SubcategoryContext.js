import {createContext, useState} from "react";

 export const SubcategoryContext = createContext(null)

 export const SubcategoryContextProvider=({children})=>{
    const [category, setCategory] = useState(false)

 return(
    <SubcategoryContext.Provider value={{exploreModal, showExplore, hideExplore}}>
        {children}
    </SubcategoryContext.Provider>
 )
 }

