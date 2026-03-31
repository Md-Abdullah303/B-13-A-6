import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

const Navber = ({AddToCartLenght}) => {
    return (
        <nav className=' fixed w-full z-50 shadow-sm bg-[#FFFFFF]'>
            <div className="navbar  md:w-[85%] mx-auto  ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">FAQ</a></li>
                            <hr className='text-black/50 mt-2' />
                            <button className=' cursor-pointer p-2 my-2 hover:bg-base-300 rounded-lg md:hidden flex'>Login</button>
                            <button className='btn sm:hidden flex bg-linear-to-l from-[#4F39F6] hover:from-[#442cfd] to-[#9514FA] hover:to-[#8404e6] text-white border-none'>Get Started</button>
                        </ul>
                    </div>
                    <a className="text-xl sm:text-3xl sm:pb-2 font-bold bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text my-3">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-[16px] font-semibold hover:bg-base-200 mx-1'><a href="#">Products</a></li>
                        <li className='text-[16px] font-semibold hover:bg-base-200 mx-1'><a href="#">Features</a></li>
                        <li className='text-[16px] font-semibold hover:bg-base-200 mx-1'><a href="#">Pricing</a></li>
                        <li className='text-[16px] font-semibold hover:bg-base-200 mx-1'><a href="#">Testimonials</a></li>
                        <li className='text-[16px] font-semibold hover:bg-base-200 mx-1'><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3.5">
                    <button className='hover:bg-base-300 relative cursor-pointer p-2 rounded-full'>
                        <p className={`absolute -top-1 z-10 bg-amber-600 text-white w-4 h-4 rounded-full 
                            ${AddToCartLenght === 0 ? 'hidden' : 'flex'} items-center justify-center text-[9px] -right-1`}>{AddToCartLenght}</p>
                        <LuShoppingCart />
                    </button>
                    <button className=' cursor-pointer hidden md:flex'>Login</button>
                    <button className='btn hidden sm:flex bg-linear-to-l from-[#4F39F6] hover:from-[#442cfd] to-[#9514FA] hover:to-[#8404e6] transition-all hover:-translate-y-0.5 hover:shadow-lg ease-out duration-300 text-white rounded-full border-none'>Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navber;