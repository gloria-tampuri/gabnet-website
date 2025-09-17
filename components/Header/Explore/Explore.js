import React, { useState, useEffect, useContext } from 'react'
import classes from './Explore.module.css'
import { getProductCategories, getSubcategories } from '../../../Helpers/queries'
import ListSubCategory from './ListSubCategory';
import Zoom from 'react-reveal/Zoom';
import { ProductContext } from '../../../context/ProductContext';
import { ModalContext } from '../../../context/ModalContext';
import { HiX } from 'react-icons/hi';


const Explore = () => {
  const [categories, setCategories] = useState()
  // const [subCategories, setSubCategories] = useState()
   const productsData = useContext(ProductContext)
   const {products} =productsData
   const exploreModalContext = useContext(ModalContext)
   const { hideExplore } = exploreModalContext

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductCategories()
      setCategories(products);
    }

    fetchProducts()
  }, [])

  return (
  <Zoom>
      <div className={classes.exploreoverlay}>
        <div className={classes.closeButton} onClick={hideExplore}>
          <HiX />
        </div>
        <div className={classes.explorelist}>
          {products && products.map(category => <ul key={category} >
            <li>{category.trim()}</li>
            <ListSubCategory category={category} />
          </ul>)}
        </div>
      </div>
  </Zoom>
  )
}


export default Explore


