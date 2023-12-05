"use client"
import React from 'react'
import Image from 'next/image';
import classes from './Featured.module.css'
import Bounce from 'react-reveal/Bounce';
import Flash from 'react-reveal/Flash';
import Link from 'next/link';
import { useFloating } from '@floating-ui/react';

const Featured = ({products}) => {
  return (
    <div className={classes.Featured}>
      <h1 className={classes.Title}>Popular Machines</h1>
      <div className={classes.griddy}>
      
      <Bounce bottom  duration={1500}>
          {/*{products.map((product) =>  <div className={classes.card} key={product.fields.title}>
          <div className={classes.imagediv}>
            <Image height='320' width='320' src={'https:' + product.fields.image.fields.file.url} alt={product.fields.title}  />
            </div>
            <div className={classes.description}>
              <h4>{product.fields.title}</h4>
              <p>{product.fields.description}</p>
            </div>

          <div className={classes.callNow}>
              <p> <a href="tel:+233595850394">Call now</a>
              </p>
            </div>
        </div>)}*/}

          {products.map((product) => <div key={product.fields.title} className={classes.FeaturedProduct}>
            <div className={classes.Image}>
              <Image height='400' width='450' src={'https:' + product.fields.image.fields.file.url} alt={product.fields.title} /></div>
            <div className={classes.description}>
              <h4>{product.fields.title}</h4>
              <p>{product.fields.description}</p>
                <Link className={classes.Button} href={'tel:+233595850394'}>Call now</Link>
            </div>
          </div>)}
      </Bounce>
     

      </div>

    </div>
  )
}

export default Featured