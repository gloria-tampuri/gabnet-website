import React from 'react'
import Head from 'next/head'
import { createClient } from 'contentful'
import Layout from '../components/Layout/Layout'
import Featured from '../components/Featured/Featured'
import BackgroundSwiper from '../components/backgroundSwiper/BackgroundSwiper'
import ServicesOffer from '../components/LandingPage/servicesOffer/ServicesOffer'
import Partner from '../components/LandingPage/partners/Partner'
import Category from '../components/LandingPage/category/Category'


const Index = (props) => {
  const { products } = props
  const { featuredProducts, productCategories, allProducts } = products

  return (
    <>
      <Head> 
        <title>GABNET</title>
        <meta  charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property='og:title' content='Read more about Gabnet'/>
        <meta name="description" content='Gabnet is a walk-in and online store that sells a variety of printing machines from screen printing machines, sublimation, and heat transfer machines, new and refurbished printers, printer spare parts, printing finishing machines, heavy-duty printing machines, toners and inks for printers, embroidery machines, industrial printers, and special commercial printing machines.' />
      </Head>
      <Layout products={allProducts}>
        <BackgroundSwiper />
        <Featured products={featuredProducts} />
        <Category />
        <ServicesOffer />
        {/* <Partner /> */}
      </Layout>
    </>

  )
}

export default Index


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const response = await client.getEntries({
    content_type: 'products'
  })


  const featuredProducts = response?.items.filter((product) => product.fields.featured === true)

  const productCategories = response?.items.filter((product) => product.fields.category === "PRINTERS")

  return {
    props: { products: { allProducts: response?.items, featuredProducts, productCategories }, revalidate: 1 }
  }
}
