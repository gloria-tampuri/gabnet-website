import { MobileModalContextProvider } from '../context/MobileModalContext'
import { ModalContextProvider } from '../context/ModalContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <MobileModalContextProvider>
        <Component {...pageProps} />
      </MobileModalContextProvider>
    </ModalContextProvider>
  )
}

export default MyApp
