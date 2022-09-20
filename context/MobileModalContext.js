import { createContext, useState } from "react";

export const MobileModalContext = createContext(null)

export const MobileModalContextProvider = ({ children }) => {
    const [mobileModal, setMobileModal] = useState(false)

    const showMobileModal = () => {
        setMobileModal(true)
    }

    const hideMobileModal = () => {
        setMobileModal(false)
    }

    return (
        <MobileModalContext.Provider value={{ mobileModal, showMobileModal, hideMobileModal }}>
            {children}
        </MobileModalContext.Provider>
    )
}