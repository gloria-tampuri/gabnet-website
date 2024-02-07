import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import classes from './CartList.module.css'

export default function CartList() {
    return (
        <div className={classes.CartList}>
            <FaShoppingCart />
            <span className={classes.CartCount}>0</span>
        </div>
    )
}
