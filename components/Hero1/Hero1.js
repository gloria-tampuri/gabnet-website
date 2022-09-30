import React from 'react'
import classes from './Hero1.module.css'
import Image from 'next/image'
import Link from 'next/link'
import groupPrinters from '../../public/access/office-printers-group-02.png'
import Bounce from 'react-reveal/Bounce';
const Hero1 = () => {
  return (
    <div className={classes.heropage}>
    
    <div className={classes.words}>
        <h1>Providing Excellent Printers for Offices and Businesses</h1>
        <p>A Variety of printers and brands for you to choose from. We make your businesses easier and better</p>

        <Bounce left> <Link href='/contact'><a>LOCATE US</a></Link></Bounce>
    </div>
     <div className={classes.mages}>
        <Image src={groupPrinters} alt='groupPrinters'/>
     </div>

    </div>
  )
}

export default Hero1