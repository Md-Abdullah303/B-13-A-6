import React from 'react';
import SectionHeading from '../../UI/SectionHeading/SectionHeading';
import { FaCheck } from 'react-icons/fa';

const TransparentPricing = () => {
    return (
        <div className='py-15 md:py-2.5 w-[85%] mx-auto '>
            <SectionHeading
                headTitle='Simple, Transparent Pricing'
                peraTitle='Choose the plan that fits your needs. Upgrade or downgrade anytime.'
            ></SectionHeading>

            {/* grid card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-4">
                {/* card 1 */}
                <div className="bg-[#F9FAFC] px-6 py-3 border border-gray-300 rounded-xl flex flex-col items-start">
                    <div className=" flex-1">
                        <h1 className='text-xl font-bold'>Starter</h1>
                        <p className='text-[14px] text-gray-500'>Perfect for getting started</p>
                        <h2 className='text-3xl font-extrabold py-4'>$0<span className='text-[16px] text-gray-500'>/month</span></h2>
                        <ul className=' space-y-2'>
                            <li className='flex items-center gap-2'><FaCheck color='#30B868' /> Access to 10 free tools</li>
                            <li className='flex items-center gap-2'><FaCheck color='#30B868' /> Basic templates</li>
                            <li className='flex items-center gap-2'><FaCheck color='#30B868' /> Community support</li>
                            <li className='flex items-center gap-2'><FaCheck color='#30B868' /> 1 project per month</li>
                        </ul>
                    </div>
                    <button className='btn my-4 w-full bg-linear-to-l from-[#4F39F6] hover:from-[#442cfd] to-[#9514FA] hover:to-[#8404e6] transition-all hover:-translate-y-0.5 hover:shadow-lg ease-out duration-300 text-white rounded-full border-none'>Get Startted Free</button>
                </div>
                {/* card 2 */}
                <div className="relative bg-linear-to-l from-[#9514FA] to-[#4F39F6] px-6 py-3 border border-gray-300 rounded-xl flex flex-col items-start text-white">
                    <div className=" absolute -top-4 left-[35%]  bg-[#FEF3C6] py-1 px-3 rounded-full">
                        <h2 className='text-[#BB4D00]'>Most Popular</h2>
                    </div> 
                    <div className=" flex-1">
                        <h1 className='text-[23px] font-bold'>Pro</h1>
                        <p className='text-[14px] text-gray-300'>Best for professionals</p>
                        <h2 className='text-3xl font-extrabold py-4'>$23<span className='text-[16px] text-gray-300'>/month</span></h2>
                        <ul className=' space-y-2'>
                            <li className='flex text-gray-300 items-center gap-2'><FaCheck  /> Access to all premium tools</li>
                            <li className='flex text-gray-300 items-center gap-2'><FaCheck  /> Unlimited templates</li>
                            <li className='flex text-gray-300 items-center gap-2'><FaCheck  /> Priority support</li>
                            <li className='flex text-gray-300 items-center gap-2'><FaCheck  /> Unlimited projects</li>
                            <li className='flex text-gray-300 items-center gap-2'><FaCheck  /> Cloud sync</li>
                            <li className='flex text-gray-300 items-center gap-2'><FaCheck  /> Advanced analytics</li>
                        </ul>
                    </div>
                    <button className='btn my-5 w-full transition-all hover:-translate-y-0.5 ease-out duration-300 rounded-full border-none '><span className='bg-linear-to-l from-[#4F39F6] hover:from-[#442cfd] to-[#9514FA] hover:to-[#8404e6] text-transparent bg-clip-text'>Get Startted Free</span></button>
                </div>
                

                {/* card 3 */}
                <div className="bg-[#F9FAFC] px-6 py-3 border border-gray-300 rounded-xl flex flex-col items-start">
                    <div className=" flex-1">
                        <h1 className='text-xl font-bold'>Enterprise</h1>
                        <p className='text-[14px] text-gray-500'>For teams and businesses</p>
                        <h2 className='text-3xl font-extrabold py-4'>$99<span className='text-[16px] text-gray-500'>/month</span></h2>
                        <ul className=' space-y-2'>
                            <li className='flex items-center gap-2'><FaCheck color='#30B868' /> Everything in Pro</li>
                            <li className='flex items-center gap-2'><FaCheck color='#30B868' /> Team collaboration</li>
                            <li className='flex items-center gap-2'><FaCheck color='#30B868' /> Custom integrations</li>
                            <li className='flex items-center gap-2'><FaCheck color='#30B868' /> Dedicated support</li>
                            <li className='flex items-center gap-2'><FaCheck color='#30B868' /> SLA guarantee</li>
                            <li className='flex items-center gap-2'><FaCheck color='#30B868' /> Custom branding</li>
                        </ul>
                    </div>
                    <button className='btn my-4 w-full bg-linear-to-l from-[#4F39F6] hover:from-[#442cfd] to-[#9514FA] hover:to-[#8404e6] transition-all hover:-translate-y-0.5 hover:shadow-lg ease-out duration-300 text-white rounded-full border-none'>Get Startted Free</button>
                </div>
            </div>
        </div>
    );
};

export default TransparentPricing;