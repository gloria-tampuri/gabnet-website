import React from 'react'
import {createClient} from 'contentful'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import Featured from '../components/Featured/Featured'





const Index = (props) => {
  console.log(props.products);
  return (
    
      <Layout>
        <Hero />
        <Featured/>
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

  return {
    props: {products: response.items, revalidate: 1}
  }
}
