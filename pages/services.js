import React,{useEffect} from 'react'
import Head from 'next/head'
import Services from '../components/Services/Services'
import { getProducts } from '../Helpers/queries'
import {createClient} from 'contentful'
import Layout from '../components/Layout/Layout'


const services = ({categories}) => {
console.log(categories);
  return (
   <>
   <Head>
    <title>Gabnet Printing Services</title>
    <meta name="viewport" content='We are the authorized distributor for one of the biggest Printer and Photocopier machine companies in Germany. Since we purchase huge volumes with leading printer and copier manufacturers like Xerox, Canon, Hp, Konica Minolta, and Hewlett Packard, we receive huge discounts that allow us to offer exceptional pricing, We offer printer sales, printer leasing and also we repair and maintain printers, embroidery machines, screen printers. We sell heat transfer vinyl, screen printing consumables, cricut maker and accessories.'/>
   </Head>
    <Layout categories={categories}>
      <Services/>
    </Layout>
   </>
  )
}

export default services


export async function getStaticProps() {

  const client = createClient({
    space:process.env.CONTENTFUL_SPACE_ID ,
    accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const response = await client.getEntries({
    content_type:'products',limit: 1000
  })

  const items=response.items.map((product)=>product.fields.category)
  // how to get a single(unique) category
  let uniqueItems = [...new Set(items)]


  return {
    props: {categories: uniqueItems, revalidate: 1}
  }
}