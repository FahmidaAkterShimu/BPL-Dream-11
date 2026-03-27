import React from 'react';
import bannerMain from "../../../assets/banner-main.png"
import bannerBg from "../../../assets/bg-shadow.png"


const Banner = () => {
    return (
        <div className='relative max-w-330 mx-auto bg-[#131313] rounded-3xl'>
            <img className='rounded-3xl min-h-fit' src={bannerBg} alt="" />
            <img className='absolute top-1/8 left-1/2 -translate-x-1/2' src={bannerMain} alt="" />

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 w-full flex flex-col justify-center items-center my-6'>
                <h1 className='text-[40px] font-bold text-center text-white mb-2'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-xl text-center text-white mb-6'>Beyond Boundaries Beyond Limits</p>
                <div className='text-center border-2 border-[#E7FE29] rounded-2xl p-2'>
                    <button className='btn font-bold text-[#131313] bg-[#E7FE29]'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;