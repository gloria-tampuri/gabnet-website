import React from 'react'
import classes from './Hero2.module.css'
import Typewriter from 'typewriter-effect';


const Hero2 = () => {
  return (
    <div className={classes.heropage}>
        <div className={classes.trans}> 
        <h1> 
<Typewriter
onInit={(typewriter) => {
  typewriter.typeString('All your Printing needs in one place!')
    .callFunction(() => {
      console.log('String typed out!');
    })
    .start();
}}     
/></h1>
        </div>
    </div>
  )
}

export default Hero2