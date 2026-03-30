import React from 'react';

const SectionHeading = ({headTitle, peraTitle}) => {
    return (
        <div className='text-center space-y-3 py-3'>
            <h1 className='text-2xl md:text-5xl font-extrabold'>{headTitle}</h1>
            <p className='text-[14px] md:text-[16px] text-gray-500 font-medium'>{peraTitle}</p>
        </div>
    );
};

export default SectionHeading;