import { ExploreDropdownContextProvider } from '../context/ExploreContext'
import { MobileModalContextProvider } from '../context/MobileModalContext'
import { ModalContextProvider } from '../context/ModalContext'
import '../styles/globals.css'
import { SubcategoryContextProvider } from '../context/SubcategoryContext'
import {ProductContextProvider} from '../context/ProductContext'

function MyApp({ Component, pageProps }) {
  return (
    < ProductContextProvider >
  <SubcategoryContextProvider> 
  <ModalContextProvider>
      <ExploreDropdownContextProvider>
      <MobileModalContextProvider>
        <Component {...pageProps} />
      </MobileModalContextProvider>
      </ExploreDropdownContextProvider>
    </ModalContextProvider>    
  </SubcategoryContextProvider>
 </ProductContextProvider> 
  )
}

export default MyApp
