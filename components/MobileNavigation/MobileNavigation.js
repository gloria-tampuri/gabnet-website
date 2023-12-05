import React, { useEffect,useState,useContext} from 'react'
import { useRouter } from 'next/router';
import Fade from 'react-reveal/Fade';
import classes from './MobileNavigation.module.css'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import Link from 'next/link'
import { MobileModalContext } from '../../context/MobileModalContext'
import { ExploreDropdownContext } from '../../context/ExploreContext'
import ExploreList from '../ExploreList/ExploreList'
import { getProductCategories } from '../../Helpers/queries';
import {SubcategoryContext} from '../../context/SubcategoryContext'

const MobileNavigation = () => {
  const router = useRouter()
  const mobileModalC = useContext(MobileModalContext)
  const [categories, setCategories] = useState()
  const exploreDropdown = useContext(ExploreDropdownContext)
  const subCategory = useContext(SubcategoryContext)
  const {hideCategory} = subCategory;

  const { hideMobileModal } = mobileModalC
  CloseEvent

  const{dropdown, showDropdown, hideDropdown} = exploreDropdown

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductCategories()
      setCategories(products);
    }

    fetchProducts()
  }, [])

  const closeAllNavs=()=>{
    hideMobileModal()
    hideDropdown()
  }
 const closeAllSubCategories=()=>{
  showDropdown()
  hideCategory()
 }


  return (
   <Fade left>
     <div className={classes.mobile}>
      <div className={classes.mheader}>
        <div className={classes.mlogo}><Link href='/'>
            <Image src={'/gabnet-Logo.png'} alt='gabnet logo' height={150} width={300} onClick={hideMobileModal} />
          </Link>
          </div>
        <AiOutlineClose className={classes.AiOutlineClose} onClick={closeAllNavs} />

      </div>

      <nav className={classes.mobilenav}>
        <ul>
          <li className={classes.explore}>Explore {dropdown ? <AiOutlineUp className={classes.AiOutlineDown} onClick={hideDropdown}/> : <AiOutlineDown className={classes.AiOutlineDown} onClick={closeAllSubCategories} />  }</li>

          {dropdown ? <ExploreList categories={categories}/> : ''}
          <hr />
          <li onClick={hideMobileModal} className={classes.mobilenavlist}>
              <Link href='/services'>Services</Link>
          </li>
          <hr />
          <li onClick={hideMobileModal}  className={classes.mobilenavlist}>
              <Link href='/contact'>Contact</Link>
          </li>
          <hr />
        </ul>
      </nav>
    </div>
   </Fade>
  )
}


export default MobileNavigation