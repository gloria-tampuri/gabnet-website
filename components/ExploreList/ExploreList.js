import React, {useState, useContext } from 'react'
import classes from './ExploreList.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
import ListSubCategoryMobile from '../Header/Explore/ListSubCategoryMobile'
import { IoIosClose } from 'react-icons/io'
import { SubcategoryContext } from '../../context/SubcategoryContext'
import Fade from 'react-reveal/Fade';

const ExploreList = ({ categories }) => {
  const subCategory = useContext(SubcategoryContext)
 
  const [isopen, setIsopen] = useState(false)

  const toShowCategory=(category)=>{
    console.log(category);
    // console.log(event.target);
    setIsopen(true)
  }
  // 

  return (
    <div>

      {categories && categories.map(category => <ul key={category} >
        <Fade left>
          <li className={classes.ExploreList}><p onClick={(event)=>toShowCategory( category)}>{category.trim()}</p>
          </li>
        </Fade>


        {
          isopen && <ListSubCategoryMobile className={classes.sublist} category={category} />
        }
      </ul>)}
    </div>
  )
}

export default ExploreList