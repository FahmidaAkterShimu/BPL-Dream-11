import React from 'react';
import Card from '../../../ui/card';

const AvailablePlayers = ({ players }) => {
    console.log(players)
    return (
        <div className='max-w-330 mx-auto mt-20'>
            <h2 className='text-3xl font-bold mb-8'>Available players</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {players.map((player) => {
                    console.log(player)
                    return <Card player={player}></Card>
                })}
            </div>

        </div>
    );
};

export default AvailablePlayers;