import React, { useContext } from 'react'

import classes from './MobileNavigation.module.css'
import Image from 'next/image'
import logo from '../../public/access/gabnet Logo.png'
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import Link from 'next/link'
import { MobileModalContext } from '../../context/MobileModalContext'
import { ExploreDropdownContext } from '../../context/ExploreContext'
import ExploreList from '../ExploreList/ExploreList'

const MobileNavigation = () => {
  const mobileModalC = useContext(MobileModalContext)
  const exploreDropdown = useContext(ExploreDropdownContext)

  const { hideMobileModal } = mobileModalC
  CloseEvent

  const{dropdown, showDropdown, hideDropdown} = exploreDropdown


  return (
    <div className={classes.mobile}>
      <div className={classes.mheader}>
        <div className={classes.mlogo}> <Link href='/'><a><Image src={logo} alt='gabnet logo' onClick={hideMobileModal} /> </a>
        </Link></div>
        <AiOutlineClose className={classes.AiOutlineClose} onClick={hideMobileModal} />

      </div>

      <nav className={classes.mobilenav}>
        <ul>
          <li className={classes.explore}>Explore {dropdown ? <AiOutlineUp className={classes.AiOutlineDown} onClick={hideDropdown}/> : <AiOutlineDown className={classes.AiOutlineDown} onClick={showDropdown} />  }</li>

          {dropdown ? <ExploreList/> : ''}
          <hr />
          <li onClick={hideMobileModal}><Link href='services'><a>Services</a></Link></li>
          <hr />
          <li onClick={hideMobileModal}><Link href='contact'><a>Contact</a></Link></li>
          <hr />
        </ul>
      </nav>
    </div>
  )
}


export default MobileNavigation