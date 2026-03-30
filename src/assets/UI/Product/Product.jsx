import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Product = ({ product }) => {
    console.log(product);
    const { imgSrc, name, period, price, tag, description, features } = product;
    return (
        <div className='border relative flex flex-col items-start space-y-2 border-gray-300 py-4 px-5 rounded-lg'>
            <div className={` absolute to-0 right-3 
                ${tag === 'New' && 'bg-green-200'}
                ${tag === 'Popular' && 'bg-purple-200'}
                ${tag === 'Best Seller' && 'bg-[#FEF3C6]'}
                py-1 px-3 rounded-full`}
                
                >
                <p className={`
                    ${tag === 'New' && 'text-green-500'}
                    ${tag === 'Popular' && 'text-purple-500'}
                    ${tag === 'Best Seller' && 'text-[#BB4D00]'}
                    `}>{tag}</p>
            </div>
            <div className="space-y-2 flex-1">
                <div className="border border-gray-200 cursor-pointer p-2 rounded-full flex items-center justify-center w-[40px]">
                    <img className='w-full' src={imgSrc} alt="" />
                </div>
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className=' text-gray-500 text-[16px]'>{description}</p>
                <h2 className='text-2xl font-bold'>${price}<span className='text-[16px] text-gray-600'>/{period}</span></h2>
                {
                    features.map(item => <p className='flex items-center gap-2 text-gray-500'><FaCheck color='#30B868'></FaCheck> {item}</p>)
                }
            </div>
            <button className='btn my-4 w-full bg-linear-to-l from-[#4F39F6] hover:from-[#442cfd] to-[#9514FA] hover:to-[#8404e6] transition-all hover:-translate-y-0.5 hover:shadow-lg ease-out duration-300 text-white rounded-full border-none'>Buy Now</button>
        </div>
    );
};

export default Product;