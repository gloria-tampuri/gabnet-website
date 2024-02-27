import { Box, Badge } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useOrderData } from '../../library/jotai-config/order';
import Link from 'next/link';

export default function ShopCart() {
    const [orders] = useOrderData();
    return (
        <Link href={'/cart'}>
            <Box position="relative" fontSize={"1.5rem"} _hover={{ cursor: "pointer" }}>
                <span className='text-gray-600'><FaShoppingCart /></span>
                <Badge position="absolute" top="-25px" right="-5px" colorScheme="red">
                    {orders.length}
                </Badge>
            </Box>
        </Link>

    );
};

