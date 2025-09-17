import React ,{useState, useContext, useRef}from 'react'
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
    const hoverTimeoutRef = useRef(null)

    const {mobileModal, showMobileModal} = mobileModalC

    const {showExplore, hideExplore} = exploreModalContext

    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current)
        }
        showExplore()
    }
    return (
        <section className={classes.float}>
            <div className={classes.Navigation}>
                <nav>
                    <ul>
                        <li onMouseEnter={handleMouseEnter}> Explore</li>
                        <li><Link href='/services'>Services</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                        <li><Link href='/gallery'>Gallery</Link></li>
                        <li><Link href='/about'>About</Link></li>
                    </ul>
                </nav>
                <div><HiOutlineMenuAlt2 className={classes.menu} onClick={showMobileModal} /></div>
            </div>
        </section>
    )
}
{/* <a onClick={()=>router.push('/contact')}>Contact</a> */}
export default Navigation