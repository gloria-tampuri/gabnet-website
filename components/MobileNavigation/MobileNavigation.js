import React,{useContext} from 'react'

import classes from './MobileNavigation.module.css'
import Image from 'next/image'
import logo from '../../public/access/gabnet Logo.png'
import {AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'
import { MobileModalContext } from '../../context/MobileModalContext'

const MobileNavigation = () => {
    const mobileModalC = useContext(MobileModalContext)
    const {hideMobileModal} = mobileModalC

  return (
    <div className={classes.mobile}>
        <div className={classes.mheader}>
           <div className={classes.mlogo}> <Link href='/'><a> <Image src={logo}  alt='gabnet logo'  /> </a> 
            </Link></div>
            <AiOutlineClose className={classes.AiOutlineClose} onClick={hideMobileModal}/>
           
        </div>

        <h1>Fhdsfljdhgljd</h1>
    </div>
  )
}


export default MobileNavigation