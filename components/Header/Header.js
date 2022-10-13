import React,{useState, useEffect, useContext} from 'react'
import { MobileModalContext } from '../../context/MobileModalContext'
import { ModalContext } from '../../context/ModalContext'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import Explore from './Explore/Explore'
import classes from './Header.module.css'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import Search from './Search/Search'


const Header = ({products,categories}) => {
  const exploreModalContext = useContext(ModalContext)
const {exploreModal } =exploreModalContext

  return (
    <div className={classes.Header}>
      <div className={classes.headersize}>
        <Logo />
        <Search />
        <Navigation/>
        { exploreModal && <Explore products={products} categories={categories}/>}
       
      </div>
     
    </div>
  )
}

export default Header