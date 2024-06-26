import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import classes from '../../components/Category/CategoryPage.module.css'
import Layout from '../../components/Layout/Layout'
import { getProducts } from '../../Helpers/queries'
import { slugify } from '../../Helpers/slugify'
import Bounce from 'react-reveal/Bounce';


const CategoryPage = () => {
    const router = useRouter()
    const { category } = router.query
    const [products, setProducts] = useState()
    const [productTitle, setProductTitle]=useState()


    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts()
            // let filter for the category we passed in our url
            const filteredCategory = products && products.filter((product) => (product.fields.category && slugify(product.fields.category) === category))
            setProducts(filteredCategory)
        }
        fetchData();
    }, [category])


    useEffect(()=>{
        const productTitles =products && products.map((product)=> product.fields.title).join()
        setProductTitle(productTitles)
      },[products])
    return (
        <>
            <Head>
                <title> GABNET </title>
                <meta  charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property='og:title' content={`More items on ${productTitle && String(productTitle)}`}/>
                <meta name='description' content={productTitle && productTitle} />
            </Head>
            <Layout>
                <div className={classes.categoryPage}>

                    <h1>{category && category.toUpperCase().replaceAll('-', ' ')}</h1>

                    <div className={classes.griddy}>
                        {products && products.map(product => <div key={product.sys.id}>
                            <Bounce bottom duration={1500}>
                                <div className={classes.card}>
                                    <div className={classes.imagediv}> 
                                    <Image src={'https:' + product.fields.image.fields.file.url} alt={product.fields.title} height='320' width='320'/> </div>
                                    <div className={classes.description}>
                                        <h4>{product.fields.title}</h4>
                                        <p>{product.fields.description}</p>
                                    </div>
                                    <div className={classes.callNow}>
                                        <p> <a href="tel:+233595850394">Call now</a>
                                        </p>
                                    </div>
                                </div>
                            </Bounce>
                        </div>
                        )}
                    </div>

                </div>
            </Layout>

        </>

    )
}

export default CategoryPage