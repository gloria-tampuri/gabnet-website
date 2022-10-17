import React from 'react'
import Head from 'next/head'
import {createClient} from 'contentful'
import Layout from '../components/Layout/Layout'
import Featured from '../components/Featured/Featured'
import CarouselPage from '../components/Carousel/CarouselPage'





const Index = (props) => {
  const {products} = props
  const {featuredProducts, productCategories,allProducts} = products

  return (
     <>
     <Head>
      <title>Gabnet home page</title>
      <meta name="viewport" content='Gabnet is a walk-in and online store that sells a variety of printing machines from screen printing machines, sublimation, and heat transfer machines, new and refurbished printers, printer spare parts, printing finishing machines, heavy-duty printing machines, toners and inks for printers, embroidery machines, industrial printers, and special commercial printing machines.'/>
     </Head>
      <Layout products={allProducts}>
       <CarouselPage/>
        <Featured products={featuredProducts}/>
      </Layout>
     </>
   
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
  

  const featuredProducts = response?.items.filter((product)=>product.fields.featured === true)

  const productCategories= response?.items.filter((product)=>product.fields.category === "PRINTERS")

  return {
    props: {products: {allProducts:response?.items, featuredProducts, productCategories}, revalidate: 1}
  }
}
