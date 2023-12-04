import React, {useContext} from 'react';
import classes from './SearchOverlay.module.css'
import Zoom from 'react-reveal/Zoom';
import Link from 'next/link';
import { slugify } from '../../../Helpers/slugify';
import { SearchContext } from '../../../context/SearchContext';

const SearchOverlay = ({searchResult}) => {
  const searchCtx = useContext(SearchContext)
  const { hideSearchHandler} = searchCtx

  const result = searchResult && searchResult.map((product) => product.fields.subCategory)
  // how to get a single(unique) category

  let uniqueCategories = [...new Set(result)]

  const getUniqueCategory = (subCategory) =>{
    let uniqueCat = searchResult && searchResult.filter((product)=> product.fields.subCategory === subCategory).map((product) => product.fields.category)

    uniqueCat = [...new Set(uniqueCat)]

    return uniqueCat;
  }


 

  return (
        <Zoom>
      <div className={classes.searchoverlay} onClick={hideSearchHandler} >
      <div className={classes.searchlist}>
        <ul>
            {uniqueCategories.map((subCategory, index) => <li key={index}><Link href={`/${slugify(getUniqueCategory(subCategory)[0])}/${subCategory && slugify(subCategory)}`}>{subCategory}</Link></li>)}
        </ul>
      </div>

    </div>
  </Zoom>
   
  )
}

export default SearchOverlay