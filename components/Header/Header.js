"use client"
import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'
import Explore from './Explore/Explore'
import classes from './Header.module.css'
import Logo from './Logo/Logo'
import MobileHeader from './MobileHeader'
import Navigation from './Navigation/Navigation'
import Image from 'next/image'


const Header = ({ products, categories, filteredproducts, onSearchResult }) => {

  const exploreModalContext = useContext(ModalContext)
  const { exploreModal } = exploreModalContext
  return (
    <div className={classes.Header} filteredproducts={filteredproducts}>
      <div className={classes.headersize}>
        <div className={classes.headerBanner}>
          <div>
            <Image src={'/images/gabnet-3.webp'} alt='gabnet banner' height={120} width={120} />
            <Image src={'/images/gabnet-7.webp'} alt='gabnet banner' height={120} width={120} />
          </div>
          <Logo />
          <div>
            <Image src={'/images/gabnet-6.webp'} alt='gabnet banner' height={120} width={120} />
            <Image src={'/images/gabnet-8.webp'} alt='gabnet banner' height={120} width={120} />
          </div>
        </div>
        {/* <Search onSearchResult={onSearchResult} /> */}
        {exploreModal && <Explore products={products} categories={categories} />}
      </div>
      <Navigation />
      <MobileHeader onSearchResult={onSearchResult} />
    </div>
  )
}


export default Header