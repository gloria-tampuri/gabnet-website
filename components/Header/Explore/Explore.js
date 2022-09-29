import React ,{useState}from 'react'
import classes from './Explore.module.css'

const Explore = ({products}) => {
     
  return (
    <div className={classes.exploreoverlay} >
    <h2>Explore overlay</h2>
    {products.map(product => <ul>
      <li>{product.fields.category}</li>
    </ul>)}
</div>
  )
}

export default Explore