"use client"
import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'
import Explore from './Explore/Explore'
import classes from './Header.module.css'
import Logo from './Logo/Logo'
import MobileHeader from './MobileHeader'
import Navigation from './Navigation/Navigation'


const Header = ({ products, categories, filteredproducts, onSearchResult }) => {
  
  const exploreModalContext = useContext(ModalContext )
  const { exploreModal } = exploreModalContext
  return (
    <div className={classes.Header} filteredproducts={filteredproducts}>
      <div className={classes.headersize}>
        <Logo />
        {/* <Search onSearchResult={onSearchResult} /> */}
        {exploreModal && <Explore products={products} categories={categories} />}
      </div>
      <Navigation />

      <MobileHeader onSearchResult={onSearchResult} />
    </div>
  )
}


export default Header