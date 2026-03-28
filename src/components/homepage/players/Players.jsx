import React, { use } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';

const Players = ({ playersPromise }) => {
    console.log(playersPromise)

    const players = use(playersPromise);
    console.log(players);

    return (
        <div className='max-w-330 mx-auto'>
            {/* players: {players.length} */}
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;