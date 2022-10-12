import React, { useEffect, useState, useContext } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { ModalContext } from '../../context/ModalContext'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import classes from './Layout.module.css'
import { MobileModalContext } from '../../context/MobileModalContext'




const Layout = ({ children,products,categories }) => {
  const exploreModalContext = useContext(ModalContext)
  const { hideExplore } = exploreModalContext;

  const mobileModalC = useContext(MobileModalContext)
  const {mobileModal} = mobileModalC

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 10) {
      hideExplore()
    }
  }, [scrollPosition])

  return (
    <div className={classes.layout} onClick={hideExplore}>
      {mobileModal && <MobileNavigation/>}
      <Header products={products} categories={categories} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout