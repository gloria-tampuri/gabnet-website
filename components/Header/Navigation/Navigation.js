import React ,{useState, useContext}from 'react'
import classes from './Navigation.module.css'
import Link from 'next/link'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import { ModalContext } from '../../../context/ModalContext'
import { MobileModalContext } from '../../../context/MobileModalContext'

const Navigation = () => {

    const exploreModalContext = useContext(ModalContext)
    const mobileModalC = useContext(MobileModalContext)

    const {mobileModal, showMobileModal} = mobileModalC

    console.log(mobileModal);

const {showExplore} = exploreModalContext
    return (
        <div className={classes.Navigation}>
            <nav>
                <ul>
                    <li onMouseOver={showExplore}> Explore</li>
                    <li> <Link href='services'><a> Services</a></Link></li>
                    <li><Link href='contact'><a>Contact</a></Link></li>
                </ul>   
            </nav>
            <div><HiOutlineMenuAlt2  className={classes.menu} onClick={showMobileModal}/></div>
        </div>
    )
}

export default Navigation