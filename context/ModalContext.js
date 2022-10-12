import {createContext, useState} from "react";

 export const ModalContext = createContext(null)

 export const ModalContextProvider=({children})=>{
    const [exploreModal, setExploreModal] = useState(false)

    const showExplore=()=>{
        setExploreModal(true)
    }

    const hideExplore=()=>{
        setExploreModal(false)
    }
 return(
    <ModalContext.Provider value={{exploreModal, showExplore, hideExplore}}>
        {children}
    </ModalContext.Provider>
 )
 }

