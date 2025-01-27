import React from 'react';

const CartWishList = ({product}) => {

    const {title,image,price,description} = product

    return (
       <div className='border-2 mb-7 rounded-2xl border-gray-600'>
         <div className='md:flex  gap-4 p-4 rounded-3xl'>
           <img className='w-96 mb-3 h-72 rounded-2xl object-cover' src={image} alt="" />
           <div>
            <h1 className='mb-3 text-4xl font-bold text-white'>{title}</h1>
            <p className='mb-4 text-gray-600  font-normal'>{description}</p>
            <p className='text-xl font-semibold'>Price: ${price}</p>
           </div>
        </div>
       </div>
    );
};

export default CartWishList;