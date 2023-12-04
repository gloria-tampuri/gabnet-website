import React from 'react'
import classes from './Logo.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className={classes.logoContainer}>
       <Link href='/'>
        <Image src={'/gabnet-Logo.png'} alt='gabnet logo' height={250} width={500} />
       </Link>
    </div>
  )
}

export default Logo