import { ExploreDropdownContextProvider } from '../context/ExploreContext'
import { MobileModalContextProvider } from '../context/MobileModalContext'
import { ModalContextProvider } from '../context/ModalContext'
import '../styles/globals.css'
import { SubcategoryContextProvider } from '../context/SubcategoryContext'

function MyApp({ Component, pageProps }) {
  return (
  <SubcategoryContextProvider> 
  <ModalContextProvider>
      <ExploreDropdownContextProvider>
      <MobileModalContextProvider>
        <Component {...pageProps} />
      </MobileModalContextProvider>
      </ExploreDropdownContextProvider>
    </ModalContextProvider>    
  </SubcategoryContextProvider>
  )
}

export default MyApp
