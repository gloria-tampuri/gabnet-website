import { useState, useEffect,useContext} from "react"
import { getSubcategories } from "../../../Helpers/queries"
import Link from "next/link"
import Fade from 'react-reveal/Fade';
import { v4 as uuidv4 } from 'uuid';
import classes from './ListSubCategoryMobile.module.css'
import { slugify } from "../../../Helpers/slugify"
import { MobileModalContext } from "../../../context/MobileModalContext";

const ListSubCategory = ({category}) => {
  
    const [individualCategory, setIndividualCategory] = useState()
    const mobileModalC = useContext(MobileModalContext)
    const { hideMobileModal } = mobileModalC;

    useEffect(() => {
      const fetchProducts = async () => {
        const products = await getSubcategories(category)
        setIndividualCategory(products);
      }
      fetchProducts()
    }, [])


    return (
    
    <Fade>
       <ul>
      {individualCategory && individualCategory.map((subCategory) =>
        <Link href={`/${slugify(category)}/${subCategory && slugify(subCategory)}`}><li className={classes.linkList} onClick={hideMobileModal} 
          key={uuidv4()}>{subCategory}</li>
        </Link>)}
    </ul>
    </Fade>
    
    )
  }

  export default ListSubCategory