import React from 'react'
import classes from './MobileNavigation.module.css'
import Image from 'next/image'
import logo from '../../public/access/gabnet Logo.png'
import {AiOutlineClose} from 'react-icons'

const MobileNavigation = () => {
  return (
    <div className={classes.MobileNavigation}>
        <div className={classes.mheader}>
            <Image src={logo} className={classes.mlogo} alt='gabnet logo' />
            <AiOutlineClose/>
        </div>



    </div>
  )
}

export default MobileNavigation