import React, { useState, useRef, useEffect, useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import Explore from './Explore/Explore'
import classes from './Header.module.css'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import Search from './Search/Search'
import MobileHeader from './MobileHeader'


const Header = ({ products, categories, filteredproducts, onSearchResult }) => {
  
  const exploreModalContext = useContext(ModalContext )
  const { exploreModal } = exploreModalContext

 

  

  return (
    <div className={classes.Header} filteredproducts={filteredproducts}>
      <div className={classes.headersize}>
        <Logo />
        {/* <Search onSearchResult={onSearchResult} /> */}
        <Navigation />
        {exploreModal && <Explore products={products} categories={categories} />}
      </div>

      <MobileHeader onSearchResult={onSearchResult}/>

    </div>
  )
}


export default Header