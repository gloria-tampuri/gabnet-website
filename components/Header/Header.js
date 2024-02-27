"use client"
import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'
import Explore from './Explore/Explore'
import classes from './Header.module.css'
import Logo from './Logo/Logo'
import MobileHeader from './MobileHeader'
import Navigation from './Navigation/Navigation'
import Image from 'next/image'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import CartList from './CartList'
import Link from 'next/link'
import ShopCart from '../shared/ShopCart'


const Header = ({ products, categories, filteredproducts, onSearchResult }) => {

  const exploreModalContext = useContext(ModalContext)
  const { exploreModal } = exploreModalContext
  return (
    <div className={classes.Header} filteredproducts={filteredproducts}>
      <div className={classes.headersize}>
        <div className={classes.headerBanner}>
          <Logo />
          <Navigation />
          {/* <CartList />*/}
          <ShopCart itemCount={'3'} />
        </div>
        {/* <Search onSearchResult={onSearchResult} /> */}
        {exploreModal && <Explore products={products} categories={categories} />}
      </div>
      <div className={classes.Contact}>
        <Link className={classes.ContactLink} href='mailto:gabnet100@gmail.com'>
          <div>
            <MdEmail />
            <p>gabnet100@gmail.com</p>
          </div>
        </Link>
        <Link className={classes.ContactLink} href='tel:+233 302243847'>
          <div>
            <IoCall />
            <p>+233 302243847</p>
          </div>
        </Link>
      </div>
      <MobileHeader onSearchResult={onSearchResult} />
    </div>
  )
}


export default Header