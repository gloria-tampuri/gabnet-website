import { ExploreDropdownContextProvider } from '../context/ExploreContext'
import { MobileModalContextProvider } from '../context/MobileModalContext'
import { ModalContextProvider } from '../context/ModalContext'
import '../styles/globals.css'
import { SubcategoryContextProvider } from '../context/SubcategoryContext'
import { ProductContextProvider } from '../context/ProductContext'
import { SearchContextProvider } from '../context/SearchContext'
import ProgressBar from '../components/shared/progressBar/ProgressBar'
import { Provider } from 'jotai'
import PageScrollProvider from '../components/PageScrollProvider'

function MyApp({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <ProgressBar />
      <Provider>
      < ProductContextProvider >
        <SubcategoryContextProvider>
          <ModalContextProvider>
            <ExploreDropdownContextProvider>
                <MobileModalContextProvider>
                  <PageScrollProvider>
                    <Component {...pageProps} />
                  </PageScrollProvider>

              </MobileModalContextProvider>
            </ExploreDropdownContextProvider>
          </ModalContextProvider>
        </SubcategoryContextProvider>
        </ProductContextProvider>
      </Provider>
    </SearchContextProvider>
  )
}

export default MyApp
