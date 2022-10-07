import React from 'react'
import classes from './ExploreList.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
import ListSubCategoryMobile from '../Header/Explore/ListSubCategoryMobile'


const ExploreList = ({ categories }) => {
 

  return (
    <div>

      {categories && categories.map(category => <ul  key={category} >
        <li className={classes.ExploreList}><p>{category.trim()}</p> <span><AiOutlinePlus/></span> </li>

         
           <ListSubCategoryMobile className={classes.sublist} category={category}/>
      </ul>)}
    </div>
  )
}

export default ExploreList