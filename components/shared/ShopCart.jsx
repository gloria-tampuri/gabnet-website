import { Box, Badge } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useOrderData } from '../../library/jotai-config/order';
import Link from 'next/link';

export default function ShopCart() {
    const [orders] = useOrderData();
    const totalOrders = orders.reduce((acc, order) => acc + order.quantity, 0);
    return (
        <Link href={'/cart'} className={`${totalOrders > 0 ? 'text-red-500' : 'text-gray-500'}`}>
            <Box position="relative" fontSize={"1.5rem"} _hover={{ cursor: "pointer" }}>
                <span><FaShoppingCart /></span>
                <Badge fontWeight={"bold"} position="absolute" top="-25px" right="-5px">
                    {totalOrders}
                </Badge>
            </Box>
        </Link>

    );
};

