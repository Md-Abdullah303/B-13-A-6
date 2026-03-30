import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center gap-0.5 md:gap-3 text-center py-5 mb-10'>
            <div className="flex flex-col items-center gap-1 md:gap-2">
                <h1 className='text-[14px] sm:text-2xl md:text-5xl text-white font-extrabold'>50K +</h1>
                <p className='text-[10px] sm:text-lg md:text-2xl font-bold text-white'>Active Users</p>
            </div>
            <hr className=' w-15 rotate-90 text-white' />
            <div className="flex flex-col items-center gap-1 md:gap-2">
                <h1 className='text-[14px] sm:text-2xl md:text-5xl text-white font-extrabold'>200 +</h1>
                <p className='text-[10px] sm:text-lg md:text-2xl font-bold text-white'>Premium Tools</p>
            </div>
            <hr className='w-15 rotate-90 text-white' />
            <div className="flex flex-col items-center gap-1 md:gap-2">
                <h1 className='text-[14px] sm:text-2xl md:text-5xl text-white font-extrabold'>4.9</h1>
                <p className='text-[10px] sm:text-lg md:text-2xl font-bold text-white'>Rating</p>
            </div>
        </div>
    );
};

export default Rating;