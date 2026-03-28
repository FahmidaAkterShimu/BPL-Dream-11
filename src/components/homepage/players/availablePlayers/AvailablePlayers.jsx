import React from 'react';
import Card from '../../../ui/card';

const AvailablePlayers = ({ players, coin, setCoin }) => {
    console.log(players)
    return (
        <div className='max-w-330 mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {players.map((player) => {
                    console.log(player)
                    return <Card player={player} coin={coin} setCoin={setCoin}></Card>
                })}
            </div>

        </div>
    );
};

export default AvailablePlayers;