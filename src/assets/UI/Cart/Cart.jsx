import React from 'react';

const Cart = ({ product, handleDlt }) => {
    return (
        <div className='flex bg-base-300 px-5 py-3 rounded-xl items-center justify-between gap-2 sm:gap-4'>
            <div className="flex items-start sm:items-center gap-1.5 sm:gap-3">
                <div className="border border-gray-400 p-2 rounded-full w-10">
                    <img className='w-full' src={product.imgSrc} alt="" />
                </div>
                <div className=" space-y-1">
                    <h1 className='text-[14px] sm:text-xl font-semibold sm:font-extrabold'>{product.name}</h1>
                    <p className='text-[11px] sm:text-lg font-semibold'>${product.price}</p>
                </div>
            </div>
            <button
            onClick={()=> handleDlt(product)} className='btn btn-error btn-outline border-none text-[10px] sm:text-[14px]  hover:text-white'>Delete</button>
        </div>
    );
};

export default Cart;