import React, { useEffect, useState, useContext } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { ModalContext } from '../../context/ModalContext'




const Layout = ({ children }) => {
  const exploreModalContext = useContext(ModalContext)
  const { hideExplore } = exploreModalContext

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
    <div onClick={hideExplore}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout