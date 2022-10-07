import React ,{useState, useContext}from 'react'
import classes from './Navigation.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import { ModalContext } from '../../../context/ModalContext'
import { MobileModalContext } from '../../../context/MobileModalContext'

const Navigation = () => {

    const router = useRouter()
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
                    <li> <a onClick={()=>router.push('/services')}> Services</a></li>
                    <li><a onClick={()=>router.push('/contact')}>Contact</a></li>
                </ul>   
            </nav>
            <div><HiOutlineMenuAlt2  className={classes.menu} onClick={showMobileModal}/></div>
        </div>
    )
}

export default Navigation