import React from 'react';

const TransformSection = () => {
    return (
        <div className='text-white  mt-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className="py-15 flex w-[90%] sm:w-[60%] mx-auto flex-col items-center justify-center gap-3 text-center">
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p className='text-[14px] sm:text-[16px] text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today. </p>
                <div className=" flex items-center gap-3">
                    <button className='btn rounded-full border-none'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Explore Products</span></button>
                    <button className='btn btn-outline rounded-full'>View Pricing</button>
                </div>
                <p className='text-[16px] text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default TransformSection;