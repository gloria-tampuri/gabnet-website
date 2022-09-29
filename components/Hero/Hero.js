import React,{useContext} from 'react'
import classes from './Hero.module.css'
import Link from 'next/link'
import { ModalContext } from '../../context/ModalContext'
import LightSpeed from 'react-reveal/LightSpeed';
import Rotate from 'react-reveal/Rotate';
import Typewriter from 'typewriter-effect';


const Hero = () => {

  const exploreModalContext =useContext(ModalContext)

  const {hideExplore} = exploreModalContext;

  return (

    <div className={classes.heropage} onClick={hideExplore}>

      <div className={classes.words}>
       <LightSpeed right>
       <h1> 
<Typewriter
onInit={(typewriter) => {
  typewriter.typeString('Providing Solutions to all your Printing needs!')
    .callFunction(() => {
      console.log('String typed out!');
    })
    .start();
}}
/></h1>
       </LightSpeed>
        
        <p className={classes.sub}>GABNET has a large collection of printers including, Laserjet Printers, Office
          Printers, Printer spare parts and Printer Consumables. We also stock Heat Press Machines, Binding
          Machines, Screen Printing Machines, Embroidery Machines and many more.
        </p>
        
       <Rotate left><Link href='/contact'><a>CONTACT US</a></Link></Rotate>
      </div>

    </div>

  )
}

export default Hero