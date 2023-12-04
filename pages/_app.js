import { ExploreDropdownContextProvider } from '../context/ExploreContext'
import { MobileModalContextProvider } from '../context/MobileModalContext'
import { ModalContextProvider } from '../context/ModalContext'
import '../styles/globals.css'
import { SubcategoryContextProvider } from '../context/SubcategoryContext'
import { ProductContextProvider } from '../context/ProductContext'
import { SearchContextProvider } from '../context/SearchContext'
import ProgressBar from '../components/shared/progressBar/ProgressBar'

function MyApp({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <ProgressBar />
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
    </SearchContextProvider>
  )
}

export default MyApp
