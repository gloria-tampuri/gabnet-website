import React from 'react'
import classes from './Logo.module.css'
import logo from '../../../public/access/gabnet Logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className={classes.logoContainer}>
       <Link href='/'>
        <a><Image src={logo}  alt='gabnet logo'  /></a>
       </Link>
    </div>
  )
}

export default Logo