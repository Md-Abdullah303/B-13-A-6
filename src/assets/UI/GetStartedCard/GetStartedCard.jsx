import React from 'react';

const GetStartedCard = ({UserImg,UserId,UserH1,UserP}) => {
    return (
        <div className="flex flex-col items-start border p-5 rounded-xl border-gray-300 bg-[#FFFFFF]">
            <div className="flex justify-end w-full">
                <p className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 flex items-center justify-center text-white text-[14px]'>{UserId}</p>
            </div>
            <div className="flex text-center flex-col items-center gap-4">
                <div className="bg-base-300 rounded-full p-4 w-[80px]">
                    <img className='w-full' src={UserImg} alt="" />
                </div>
                <h1 className=' font-bold text-2xl'>{UserH1}</h1>
                <p className='text-[14px] sm:text-[16px] text-gray-600'>{UserP}</p>
            </div>
        </div>
    );
};

export default GetStartedCard;