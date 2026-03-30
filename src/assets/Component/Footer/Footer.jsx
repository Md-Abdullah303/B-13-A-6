import React from 'react';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#101727] mt-10 md:mt-20 text-[#FFFFFF]'>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 w-[85%] mx-auto py-10 md:py-15">
                <div className="space-y-2">
                    <h1 className='text-2xl font-bold'>DigiTools</h1>
                    <p className='text-[14px] text-gray-400'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className="space-y-2 flex flex-col items-start">
                    <h1 className='text-xl font-bold'>Product</h1>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Features</p>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Pricing</p>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Templates</p>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Integrations</p>
                </div>
                <div className=" space-y-2 flex flex-col items-start">
                    <h1 className='text-xl font-bold'>Company</h1>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>About</p>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Blog</p>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Careers</p>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Press</p>
                </div>
                <div className="space-y-2 flex flex-col items-start">
                    <h1 className='text-xl font-bold'>Resources</h1>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Documentation</p>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Help Center</p>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Community</p>
                    <p className='text-[14px] text-gray-400 cursor-pointer hover:text-white'>Contact</p>
                </div>
                <div className="space-y-2">
                    <h1 className='text-xl font-bold'>Social Links</h1>
                    <div className=" flex items-center gap-2">
                        <div className=" cursor-pointer bg-amber-50 p-1 rounded-full"><FaInstagramSquare color='#101727' /></div>
                        <div className=" cursor-pointer bg-amber-50 p-1 rounded-full"><FaFacebook color='#101727' /></div>
                        <div className=" cursor-pointer bg-amber-50 p-1 rounded-full"><AiFillAmazonCircle color='#101727' /></div>
                    </div>
                </div>
            </div>
            <hr className=' w-[85%] mx-auto text-gray-400'/>
            <div className="flex text-[14px] text-[#fafafa50] py-4 items-center justify-between w-[85%] mx-auto">
                <h3>&copy; 2026 Digitools. All rights reserved.</h3>
                <ul className=' flex items-center gap-3  '>
                    <li className=' cursor-pointer hover:text-white'><a href="#"></a>Privacy Policy</li>
                    <li className=' cursor-pointer hover:text-white'><a href="#"></a>Terms of Service</li>
                    <li className=' cursor-pointer hover:text-white'><a href="#"></a>Cookies</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;