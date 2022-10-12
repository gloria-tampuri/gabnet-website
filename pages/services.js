import React,{useEffect} from 'react'
import Services from '../components/Services/Services'
import { getProducts } from '../Helpers/queries'
import {createClient} from 'contentful'
import Layout from '../components/Layout/Layout'


const services = ({categories}) => {
console.log(categories);
  return (
    <Layout categories={categories}>
      <Services/>
    </Layout>
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