import React, { useContext } from 'react'
import classes from './Hero.module.css'
import Link from 'next/link'
import { ModalContext } from '../../context/ModalContext'
import LightSpeed from 'react-reveal/LightSpeed';
import Rotate from 'react-reveal/Rotate';

const Hero = () => {

  const exploreModalContext = useContext(ModalContext)

  const { hideExplore } = exploreModalContext;

  return (

    <div className={classes.heropage} onClick={hideExplore}>

      <div className={classes.words}>
        <LightSpeed right>
          <h1>
            Providing Solutions to all your Printing needs!
          </h1>
        </LightSpeed>

        <p className={classes.sub}>GABNET has a large collection of printers including, Laserjet Printers, Office
          Printers, Printer spare parts and Printer Consumables. We also stock Heat Press Machines, Binding
          Machines, Screen Printing Machines, Embroidery Machines and many more.
        </p>

        <Link href='/contact'>CONTACT US</Link>
      </div>

    </div>

  )
}

export default Hero