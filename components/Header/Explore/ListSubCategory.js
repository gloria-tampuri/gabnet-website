import { useState, useEffect,useContext} from "react"
import { getSubcategories } from "../../../Helpers/queries"
import Link from "next/link"
import { v4 as uuidv4 } from 'uuid';

import classes from'./Explore.module.css'
import { slugify } from "../../../Helpers/slugify"
import { MobileModalContext } from "../../../context/MobileModalContext";

const ListSubCategory = ({ category}) => {
    const [individualCategory, setIndividualCategory] = useState()
    const mobileModalC = useContext(MobileModalContext)
    const { hideMobileModal } = mobileModalC

    useEffect(() => {
      const fetchProducts = async () => {
        const products = await getSubcategories(category)
        setIndividualCategory(products);
      }
      fetchProducts()
    }, [category])
  
    return (
      <ul>
        {individualCategory && individualCategory.map((subCategory) =>
          <Link key={uuidv4()} href={`/${slugify(category)}/${subCategory && slugify(subCategory)}`}><li onClick={hideMobileModal} className={classes.subCategory}
            >{subCategory}</li>
          </Link>)}
      </ul>
    )
  }

  export default ListSubCategory