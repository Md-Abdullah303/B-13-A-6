import React from 'react';
import SectionHeading from '../../UI/SectionHeading/SectionHeading';
import GetStartedCard from '../../UI/GetStartedCard/GetStartedCard';
import UserPng from '../../products/user.png'
import BoxPng from '../../products/package.png'
import RoketPng from '../../products/rocket.png'


const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] py-20'>
            <div className="w-[90%] sm:w-[85%] mx-auto">

                <SectionHeading
                    headTitle={'Get Started in 3 Steps'}
                    peraTitle={'Start using premium digital tools in minutes, not hours.'}
                ></SectionHeading>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-3 gap-6  py-5">
                    <GetStartedCard
                        UserId='01'
                        UserImg={UserPng}
                        UserH1='Create Account'
                        UserP='Sign up for free in seconds. No credit card required to get started.'
                    ></GetStartedCard>
                    <GetStartedCard
                        UserId='02'
                        UserImg={BoxPng}
                        UserH1='Choose Products'
                        UserP='Browse our catalog and select the tools that fit your needs.'
                    ></GetStartedCard>
                    <GetStartedCard
                        UserId='03'
                        UserImg={RoketPng}
                        UserH1='Start Creating'
                        UserP='Download and start using your premium tools immediately.'
                    ></GetStartedCard>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;