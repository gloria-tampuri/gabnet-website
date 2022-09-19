import React from 'react'
import classes from './Search.module.css'
import {ImSearch} from 'react-icons/im'

const Search = () => {
  return (
    <div className={classes.Search}>
        <input type='search' placeholder='Search products, brands and categories'  />
        <ImSearch className={classes.searchIcon}/>
    </div>
  )
}

export default Search