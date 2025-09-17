import React, { useContext } from 'react'
import classes from './Explore.module.css'
import ListSubCategory from './ListSubCategory';
import Zoom from 'react-reveal/Zoom';
import { ProductContext } from '../../../context/ProductContext';
import { ModalContext } from '../../../context/ModalContext';
import { HiX } from 'react-icons/hi';


const Explore = () => {
   const productsData = useContext(ProductContext)
   const {products, loading, error} = productsData
   const exploreModalContext = useContext(ModalContext)
   const { hideExplore } = exploreModalContext

  return (
  <Zoom>
      <div className={classes.exploreoverlay}>
        <div className={classes.closeButton} onClick={hideExplore}>
          <HiX />
        </div>
        <div className={classes.explorelist}>
          {loading && (
            <div className={classes.loadingState}>
              <div className={classes.spinner}></div>
              <p>Loading categories...</p>
            </div>
          )}
          {error && (
            <div className={classes.errorState}>
              <p>Error loading categories: {error}</p>
            </div>
          )}
          {!loading && !error && products && products.map(category => <ul key={category} >
            <li>{category.trim()}</li>
            <ListSubCategory category={category} />
          </ul>)}
        </div>
      </div>
  </Zoom>
  )
}


export default Explore


