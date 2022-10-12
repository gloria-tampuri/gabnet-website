import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import classes from '../../components/Category/CategoryPage.module.css'
import Layout from '../../components/Layout/Layout'
import { getProducts } from '../../Helpers/queries'
import { slugify } from '../../Helpers/slugify'
import Bounce from 'react-reveal/Bounce';


const CategoryPage = () => {
    const router = useRouter()
    const { category } = router.query
    const [products, setProducts] = useState()


    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts()
            // let filter for the category we passed in our url
            const filteredCategory = products && products.filter((product) => (product.fields.category && slugify(product.fields.category) === category))
            setProducts(filteredCategory)
        }
        fetchData();
    }, [category])
 console.log(products);

    return (
        <Layout>
           <div className={classes.categoryPage}>

<h1>{category && category.toUpperCase().replaceAll('-', ' ')}</h1>

 <div className={classes.griddy}>
 {products && products.map(product => <div key={product.sys.id}>
   <Bounce bottom  duration={1500}>
   <div  className={classes.card}>
   <div className={classes.imagediv}> <img src={product.fields.image.fields.file.url} alt={product.fields.title} /> </div>
  <div className={classes.description}> 
  <h4>{product.fields.title}</h4> 
  <p>{product.fields.description}</p>
  </div>
  <div className={classes.callNow}>
         <p> <a href="tel:+233595850394">Call now</a>
         </p>
       </div> </div>
       </Bounce> 
 </div> 
 )}
 </div>

</div>
        </Layout>

    )
}

export default CategoryPage