import React from 'react'
import {createClient} from 'contentful'
import Layout from '../components/Layout/Layout'
import Featured from '../components/Featured/Featured'
import CarouselPage from '../components/Carousel/CarouselPage'





const Index = (props) => {
  const {products} = props
  const {featuredProducts, productCategories,allProducts} = products

  return (
      <Layout products={allProducts}>
       <CarouselPage/>
        <Featured products={featuredProducts}/>
      </Layout>
   
  )
}

export default Index


export async function getStaticProps() {

  const client = createClient({
    space:process.env.CONTENTFUL_SPACE_ID ,
    accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const response = await client.getEntries({
    content_type:'products'
  })
  
client.getEntry()
  const featuredProducts = response?.items.filter((product)=>product.fields.featured === true)

  const productCategories= response?.items.filter((product)=>product.fields.category === "PRINTERS")

  return {
    props: {products: {allProducts:response?.items, featuredProducts, productCategories}, revalidate: 1}
  }
}
