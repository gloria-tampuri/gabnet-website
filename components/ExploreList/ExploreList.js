import React from 'react'
import classes from './ExploreList.module.css'
import {AiOutlinePlus} from 'react-icons/ai'

const ExploreList = () => {
  return (
    <div className={classes.ExploreList}>
        <ul>
            <li> <span>Printers</span> <span><AiOutlinePlus/></span></li>
            <li>Screen Printing</li>
            <li>Embroidery Machines</li>
            <li>Toners and Inks</li>
            <li>Printing Spare Parts </li>
            <li>Heavy Duty Machines </li> 
        </ul>
    </div>
  )
}

export default ExploreList