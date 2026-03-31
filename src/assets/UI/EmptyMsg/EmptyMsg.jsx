import React from 'react';

const EmptyMsg = () => {
    return (
        <div className='py-10 my-15 bg-base-300 p-5 rounded-xl space-y-3 text-center'>
            <h2 className='text-3xl font-extrabold'>Cart is empty</h2>
            <p className='text-lg font-medium text-gray-600'>Browse products and add your favorites to get started.</p>
        </div>
    );
};

export default EmptyMsg;