import React,{useState} from 'react'
import Explore from './Explore/Explore'
import classes from './Header.module.css'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import Search from './Search/Search'

const Header = () => {
  
  const [isExplore, setIsExplore] =useState(false)

  const exploreHandler=()=>{
    setIsExplore(true)
  }

  const closeExplorehandler=()=>{
    setIsExplore(false)
  }

  return (
    <div className={classes.Header}>
      <div className={classes.headersize}>
        <Logo />
        <Search />
        <Navigation showExplore={exploreHandler}/>
        { isExplore && <Explore/>}
      </div>
     
    </div>
  )
}

export default Header