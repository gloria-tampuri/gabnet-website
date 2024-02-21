import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import classes from './CartList.module.css'
import Link from 'next/link'
import { useOrderData } from '../../../library/jotai-config/order';

export default function CartList() {
    const [orders, setOrders] = useOrderData();

    console.log(orders);

    return (
        <Link href={'/cart'} className={classes.CartList}>
            <FaShoppingCart />
            <span className={classes.CartCount}>{orders.length}</span>
        </Link>
    )
}
