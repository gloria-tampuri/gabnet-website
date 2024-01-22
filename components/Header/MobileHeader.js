import React, { useState, useRef, useEffect, useContext } from 'react'
import Fade from 'react-reveal/Fade';
import { ImSearch } from 'react-icons/im'
import Logo from './Logo/Logo';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import classes from './MobileHeader.module.css'
import { MobileModalContext } from '../../context/MobileModalContext';
import { SearchContext } from '../../context/SearchContext';
import { getProducts } from '../../Helpers/queries';


const MobileHeader = ({onSearchResult}) => {
  const searchCtx = useContext(SearchContext)
  const {showSearchHandler, hideSearchHandler} =searchCtx;
    const inputRef = useRef('');
  const [searchOnSmallScreen, setSearchOnSmallScreen] = useState(false)
    const mobileModalC = useContext(MobileModalContext)
  const { mobileModal, showMobileModal } = mobileModalC
  const [productState, setProductState] =useState(null)


  const onToggleSearchHandler = () => {
    setSearchOnSmallScreen(!searchOnSmallScreen)
  }

  const inputHandler=()=>{
    const inputData = inputRef.current.value
  
    if(inputData.length<1){
    return  hideSearchHandler();
    }
  
      if(productState !== null){
        showSearchHandler();
        const filteredproducts= productState.filter((product)=> product.fields.title.includes(inputData.toUpperCase()) ||  product.fields.title===(inputData.toUpperCase()) || product.fields.category ===(inputData.toUpperCase()) || product.fields.category.includes(inputData.toUpperCase()))
        onSearchResult(filteredproducts)
      }else{
        return
      };
    
  }

  useEffect(()=>{
    const fetchData=async()=>{
      const products = await getProducts()
      setProductState(products)
    }
    
      fetchData()
    }, [])
    

  return (
    <div className={classes.Header }>
          <div className={classes.mobileHeader}>
            <HiOutlineMenuAlt2 className={classes.menu} onClick={showMobileModal} />
           {searchOnSmallScreen ? <div className={classes.Search}>
              <input type='search' placeholder='Search products, brands and categories' ref={inputRef} onChange={inputHandler} />
            </div>: <Logo />}
           {/* <ImSearch className={classes.searchIcon} onClick={onToggleSearchHandler} />*/}
      </div>
    </div>
  )
}

export default MobileHeader


