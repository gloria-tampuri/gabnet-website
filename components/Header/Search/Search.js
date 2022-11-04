import React,{useRef,useEffect, useState,useContext} from 'react'
import classes from './Search.module.css'
import {ImSearch} from 'react-icons/im'
import { getProducts } from '../../../Helpers/queries';
import { SearchContext } from '../../../context/SearchContext';


const Search = ({onSearchResult}) => {
  const searchCtx = useContext(SearchContext)
const {showSearchHandler, hideSearchHandler} =searchCtx;
  const inputRef = useRef('');
  const [productState, setProductState] =useState(null)

  
useEffect(()=>{
  const fetchData=async()=>{
    const products = await getProducts()
    setProductState(products)}
  
    fetchData()
  }, [])

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

  return (
  
    <div className={classes.Search}>
        <input type='search' placeholder='Search products, brands and categories' ref={inputRef} onChange={inputHandler}/>
        <ImSearch className={classes.searchIcon}/>
       
    </div>
   
  
  ) 
}

export default Search