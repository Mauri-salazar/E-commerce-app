import React from 'react';
import {CalendarDaysIcon, ShoppingCartIcon, ChevronDoubleRightIcon} from '@heroicons/react/24/solid'


export const OrdersCard = (props) => {
    const {totalPrice, totalProducts} = props;

    return (
        <div className='flex justify-between items-center w-80 h-50 p-4 mb-4 first-letter: border-2 border-black rounded-md'>
            <p className='flex'>{<CalendarDaysIcon className='w-5'/>}2.7.23</p>
            <span className='flex'>{<ShoppingCartIcon className='w-5' />}{totalProducts}</span> 
            <span className="font-bold">${totalPrice}</span>
            <ChevronDoubleRightIcon className='w-5'/>
        </div>
    )
};
