import React ,{useState}from 'react'
import classes from './Navigation.module.css'
import Link from 'next/link'
import {HiOutlineMenuAlt2} from 'react-icons/hi'

const Navigation = ({showExplore}) => {



    return (
        <div className={classes.Navigation}>
            <nav>
                <ul>
                    <li onMouseOver={showExplore}> Explore</li>
                    <li> <Link href='services'><a> Services</a></Link></li>
                    <li><Link href='contact'><a>Contact</a></Link></li>
                </ul>   
            </nav>
            <div><HiOutlineMenuAlt2  className={classes.menu}/></div>
        </div>
    )
}

export default Navigation