import React from 'react';
import dollerImg from "../../assets/dollar_1.png"
import logo from "../../assets/logo.png"

const Navbar = ({ coin }) => {
    return (
        <div className='mb-6 mt-12'>
            <div className="max-w-330 mx-auto navbar">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <button className="font-bold text-xl flex justify-between items-center gap-2 rounded-xl border-2 border-gray-200 px-5 py-4">
                        {coin} Coins
                        <img src={dollerImg} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;