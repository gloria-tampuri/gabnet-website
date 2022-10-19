import React from 'react'
import Head from 'next/head'
import Contact from '../components/Contact/Contact'

const contact = () => {

  return (
    <div>
     <Head>
      <title>GABNET | CONTACT</title>
     <meta  charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property='og:title' content='how to contact us'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description' content='Gabent is located at House Party  Building opposite Republic and NIB Banks in Accra Newtown and also located at Almadiya Roundabout, Kumasi. You can call us at 059580394,0302243847,0508737663 or email us at info@gabnetprinting.com. Gabnet is your one stop home for all your printing needs'/>
     </Head>
      <Contact/>
      </div>
  )
}

export default contact

