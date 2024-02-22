import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import classes from './CartList.module.css'
import Link from 'next/link'
import { useOrderData } from '../../../library/jotai-config/order';

export default function CartList() {
    const [orders] = useOrderData();
    return (
        <Link href={'/cart'} className={`${classes.CartList} ${orders.length > 0 ? classes.CartListSpanActive : ''}`} >
            <FaShoppingCart />
            <span className={classes.CartCount}>{orders.length}</span>
        </Link>
    )
}
