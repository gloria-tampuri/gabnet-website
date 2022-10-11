import React, { useState, useEffect } from 'react'
import classes from './Explore.module.css'
import { getProductCategories, getSubcategories } from '../../../Helpers/queries'
import ListSubCategory from './ListSubCategory';
import Zoom from 'react-reveal/Zoom';


const Explore = () => {
  const [categories, setCategories] = useState()
  // const [subCategories, setSubCategories] = useState()


  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductCategories()
      setCategories(products);
    }

    fetchProducts()
  }, [])


  // const retrieveSubcategories = async (category) => {
  //   const subcategories = await getSubcategories(category)
  //   // setSubCategories(subcategories)
  //   console.log(typeof category);
  //   console.log(subcategories)
  // }

  // console.log(subCategories && subCategories);

  return (
  <Zoom>
      <div className={classes.exploreoverlay} >
      <div className={classes.explorelist}>
        {categories && categories.map(category => <ul key={category} >
          <li>{category.trim()}</li>
          <ListSubCategory category={category} />
        </ul>)}
      </div>

    </div>
  </Zoom>
  )
}


export default Explore


