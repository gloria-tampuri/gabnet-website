import React from 'react'
import classes from './Featured.module.css'
import Bounce from 'react-reveal/Bounce';


const Featured = ({products}) => {

  return (
    <div className={classes.Featured}>
      <h1>Featured</h1>
      <div className={classes.griddy}>
      
      <Bounce bottom>
      {products.map((product) =>  <div className={classes.card} key={product.fields.title}>
          <div className={classes.imagediv}>
            {/* <Image src={product.fields.image} alt={product.fields.title} /> */}
            <img src={product.fields.image.fields.file.url} alt={product.fields.title}  />
            </div>
            <div className={classes.description}>
              <h4>{product.fields.title}</h4>
              <p>{product.fields.description}</p>
            </div>
            <div className={classes.callNow}>
              <p> <a href="tel:+233595850394">Call now</a>
              </p>
            </div>
          
        </div>)}
      </Bounce>
     

      </div>

    </div>
  )
}

export default Featured