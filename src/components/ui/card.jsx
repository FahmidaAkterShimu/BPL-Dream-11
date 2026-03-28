import React from 'react';
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from 'react-icons/io5';

const Card = ({ player }) => {
    return (
        <div className="card bg-base-100 shadow-sm border-2 border-gray-100 rounded-2xl">
            <figure className='card-body'>
                <img className='rounded-2xl'
                    src={player.playerImg}
                    alt="Player" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <FaUser />
                    {player.playerName}
                </h2>

                <div className='flex justify-between gap-2 items-center'>
                    <div className='flex gap-3 items-center opacity-50'>
                        <IoFlagSharp />
                        <p>{player.playerCountry}</p>
                    </div>
                    <button className='btn border-none rounded-lg'>{player.playerType}</button>
                </div>

                <div class="divider"></div>

                <h2 className='font-bold'>Rating ({player.rating})</h2>

                <div className='font-bold flex justify-between'>
                    <p>{player.battingStyle}</p>
                    <p className='text-right'>{player.bowlingStyle}</p>
                </div>

                <div className="card-actions justify-between items-center">
                    <p className='font-bold'>Price: {player.price}</p>
                    <button className="btn btn-outline border-2 border-gray-100 rounded-lg">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Card;