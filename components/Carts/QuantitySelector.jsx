import React, { useState } from 'react';
import { Button, HStack, Input } from '@chakra-ui/react';
import { useOrderData } from '../../library/jotai-config/order';

const QuantitySelector = ({ initialQuantity = 1, minQuantity = 1, maxQuantity = 100, orderId }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const [orderData, setOrderData] = useOrderData();

    const currentQuantity = orderData.find((order) => order.product.sys.id === orderId)?.quantity || 0;

    const onQuantityChange = (newQuantity) => {
        setOrderData(orderData.map((order) => {
            if (order.product.sys.id === orderId) {
                return { ...order, quantity: newQuantity };
            }
            return order;
        }));
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = Math.max(prevQuantity - 1, minQuantity);
            onQuantityChange(newQuantity);
            return newQuantity;
        });
    };

    const handleIncrease = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = Math.min(prevQuantity + 1, maxQuantity);
            onQuantityChange(newQuantity);
            return newQuantity;
        });
    };

    const handleChange = (event) => {
        let newQuantity = parseInt(event.target.value, 10);
        if (isNaN(newQuantity) || newQuantity < minQuantity) {
            newQuantity = minQuantity;
        } else if (newQuantity > maxQuantity) {
            newQuantity = maxQuantity;
        }
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    return (
        <HStack maxW="320px" className='flex items-center'>
            <Button className='bg-gray-700 h-6 w-6 text-white font-semibold text-center rounded-full' onClick={handleDecrease} disabled={quantity === minQuantity}>-</Button>
            <Input
                value={currentQuantity}
                onChange={handleChange}
                type="number"
                max={maxQuantity}
                min={minQuantity}
                width="50px"
                textAlign="center"
            />
            <Button className='bg-gray-700 h-6 w-6 text-white font-semibold text-center rounded-full' onClick={handleIncrease} disabled={quantity === maxQuantity}>+</Button>
        </HStack>
    );
};

export default QuantitySelector;
