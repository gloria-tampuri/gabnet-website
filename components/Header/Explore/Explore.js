import React ,{useState,useEffect}from 'react'
import { v4 as uuidv4 } from 'uuid';
import classes from './Explore.module.css'
import { getProductCategories, getSubcategories } from '../../../Helpers/queries'
import Link from 'next/link';
import { slugify } from '../../../Helpers/slugify';

const Explore = ({products}) => {
  const [categories, setCategories] = useState()
  const [subCategories, setSubCategories] = useState()


  useEffect(()=>{
    const fetchProducts = async () =>{
      const products = await getProductCategories()
      setCategories(products);
    }
  
    fetchProducts()
   },[])

  
   const retrieveSubcategories = async (category) =>{
    const subcategories = await getSubcategories(category)
    // setSubCategories(subcategories)
    console.log(typeof category);
    console.log(subcategories)
   }

   console.log(subCategories && subCategories);
     
  return (
    <div className={classes.exploreoverlay} >
    <h2>Explore overlay</h2>
    <div  className={classes.explorelist}>
    {categories && categories.map(category => <ul key={category} >
      <li onClick={() => retrieveSubcategories(category)}>{category.trim()}</li>
     <ListSubCategory category={category}/>
    </ul>)}  
    </div>

</div>
  )
}


export default Explore

const ListSubCategory=({category})=>{
  const[individualCategory, setIndividualCategory] =useState()

     useEffect(()=>{
    const fetchProducts = async () =>{
      const products = await getSubcategories(category)
      setIndividualCategory(products);
    }
    fetchProducts()
   },[])

return(
  <ul>
    {individualCategory && individualCategory.map((subCategory)=>
    <Link href={`/${slugify(category)}/${subCategory && slugify(subCategory)}`}><li className={classes.subCategory}
    key={uuidv4()}>{subCategory}</li>
    </Link>)}    
  </ul>
)
}
