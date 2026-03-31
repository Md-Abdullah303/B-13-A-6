import React from 'react';
import bannerImg from '../../products/banner.png'
import playImg from '../../products/Play.png'

const HeroSection = () => {
    return (
        <div className='flex items-center gap-15 w-[90%] sm:w-[85%] mx-auto h-screen justify-between'>
            {/* left side */}
            <div className="max-w-250 flex flex-col items-start sm:space-y-3 space-y-2 ">
                {/* left side badge */}
                <div className="bg-[#E1E7FF] py-1 px-3 rounded-full flex items-center gap-1 sm:gap-2">
                    <div className="bg-linear-to-r from-[#4F39F640] to-[#9514FA40] rounded-full p-0.5 sm:p-1">
                        <div className="bg-linear-to-r from-[#4F39F670] to-[#9514FA70] rounded-full p-0.5 sm:p-1"><div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-0.5 sm:p-1"></div></div>
                    </div>
                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text font-medium text-[12px] sm:text-[16px]'>New: AI-Powered Tools Available</p>
                </div>
                {/* left side contant */}
                <div className=" space-y-2 sm:space-y-3">
                    <h1 className='text-[#101727] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-11 md:leading-18'>Supercharge Your Digital Work flow</h1>
                    <p className='text-[#627382] text-[13px] sm:text-[18px] '>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>
                    {/* btn grps */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <button className='btn bg-linear-to-l from-[#4F39F6] hover:from-[#442cfd] to-[#9514FA] hover:to-[#8404e6] transition-all hover:-translate-y-0.5 hover:shadow-lg ease-out duration-300 text-white rounded-full border-none'>Explore Products</button>
                        <button className='btn btn-outline btn-primary rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg ease-out duration-300'><img src={playImg} alt="" />Watch Demo</button>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="w-[600px] md:w-[300px] lg:w-[400px] hidden sm:flex shadow-2xl rounded-xl justify-self-center md:justify-self-end ">
                <img className='w-full rounded-sm' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;