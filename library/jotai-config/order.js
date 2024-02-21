import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const orderAtom = atomWithStorage(
    'orders',
    [],
);


export const useOrderData = () => useAtom(orderAtom);
