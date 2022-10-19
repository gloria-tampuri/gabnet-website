import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { getProducts, getSubcategories } from '../../Helpers/queries'
import { slugify, unSlugify } from '../../Helpers/slugify'
import classes from '../../components/Category/CategoryPage.module.css'
import Layout from '../../components/Layout/Layout'
import Bounce from 'react-reveal/Bounce';
import Head from 'next/head'
import Image from 'next/image'


const SubCategoriesPage = () => {
  const router = useRouter()
  const { category, subcategory } = router.query
  const [products,setProducts] = useState()
  const [productTitle, setProductTitle] = useState()

  useEffect(() => {

    const fetchData = async () => {
      const products = await getProducts()
      // let filter for the category we passed in our url
      const filteredCategory = products && products.filter((product) =>  (product.fields.category && slugify(product.fields.category) === category) && (product.fields.subCategory && slugify(product.fields.subCategory) === subcategory))
      setProducts(filteredCategory)
    }
    fetchData();
  }, [category, subcategory])


  useEffect(()=>{
    const productTitles =products && products.map((product)=> product.fields.title).join()
    setProductTitle(productTitles)
  },[products])


  return (
 <>
 <Head>
  <title> GABNET | {subcategory && String(subcategory.toUpperCase().replaceAll('-', ' '))} </title>
 <meta  charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description' content={productTitle && String(productTitle)}/>
        <meta property='og:title' content={`More items on ${subcategory}`}/>
        <meta name='description' content={subcategory}/>
 </Head>
  <Layout>
     <div className={classes.categoryPage}>

     <h1>{subcategory && subcategory.toUpperCase().replaceAll('-', ' ')}</h1>
    
      <div className={classes.griddy}>
      {products && products.map(product => <div key={product.sys.id}>
        <Bounce bottom  duration={1500}>
        <div  className={classes.card}>
        <div className={classes.imagediv}> <Image height='320' width='320' src={'https:' + product.fields.image.fields.file.url} alt={product.fields.title}  /> </div>
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
 </>
  )
}

export default SubCategoriesPage

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//  const categoryAndSubCategory = await getProducts()
//   // Get the paths we want to pre-render based on posts
//   const paths = categoryAndSubCategory.map((product) => ({
//     params: { category: product.fields.category, subcategory:product.fields.subCategory && product.fields.subCategory},
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   const products = await getProducts();
//   const productSubCategories = products && products.map((product) => product.fields.subCategory)

//   // Pass products data to the page via props
//   return { props: { products: productSubCategories } }
// }

//height={product.fields.image.fields.file.details.image.height} width={product.fields.image.fields.file.details.image.width}