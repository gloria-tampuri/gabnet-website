import React from 'react'
import Layout from '../../components/Layout/Layout'
import Head from 'next/head'
import Carts from '../../components/Carts'

export default function CartPage() {
    return (
        <>
            <Head>
                <title>GABNET - CART</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property='og:title' content='Read more about Gabnet' />
                <meta name="description" content='Gabnet is a walk-in and online store that sells a variety of printing machines from screen printing machines, sublimation, and heat transfer machines, new and refurbished printers, printer spare parts, printing finishing machines, heavy-duty printing machines, toners and inks for printers, embroidery machines, industrial printers, and special commercial printing machines.' />
            </Head>
            <Layout>
                <Carts />
            </Layout>
        </>

    )
}
