import {createContext, useState} from "react";

 export const SubcategoryContext = createContext(null)

 export const SubcategoryContextProvider=({children})=>{
    const [categoryc, setCategory] = useState(false)

    const showCategory=()=>{
      setCategory(true)
  }

  const hideCategory=()=>{
   setCategory(false)
  }

 return(
    <SubcategoryContext.Provider value={{categoryc,showCategory,hideCategory}}>
        {children}
    </SubcategoryContext.Provider>
 )
 }

