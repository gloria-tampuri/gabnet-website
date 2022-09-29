import { ExploreDropdownContextProvider } from '../context/ExploreContext'
import { MobileModalContextProvider } from '../context/MobileModalContext'
import { ModalContextProvider } from '../context/ModalContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <ExploreDropdownContextProvider>
      <MobileModalContextProvider>
        <Component {...pageProps} />
      </MobileModalContextProvider>
      </ExploreDropdownContextProvider>
    </ModalContextProvider>
  )
}

export default MyApp
