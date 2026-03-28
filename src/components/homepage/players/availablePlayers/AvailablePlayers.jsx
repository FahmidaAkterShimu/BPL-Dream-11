import React from 'react';
import Card from '../../../ui/card';

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    console.log(players)
    return (
        <div className='max-w-330 mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {players.map((player, ind) => {

                    return <Card
                        key={ind}
                        player={player}
                        coin={coin}
                        setCoin={setCoin}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}></Card>
                })}
            </div>

        </div>
    );
};

export default AvailablePlayers;