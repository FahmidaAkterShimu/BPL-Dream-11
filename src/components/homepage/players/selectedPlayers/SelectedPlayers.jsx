import React from 'react';
import SelectedCard from '../../../ui/SelectedCard';

const SelectedPlayers = ({
    selectedPlayers,
    setSelectedPlayers,
    coin,
    setCoin,
}) => {
    console.log(selectedPlayers);

    const handleDeletePlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !== player.playerName);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }

    return (
        <div>
            <div className='space-y-6'>
                {selectedPlayers.length === 0
                    ? <div className='text-center text-gray-400 space-y-2 py-24'>
                        <h2 className='text-3xl'>No players selected yet</h2>
                        <p>Go to Available tab to select players</p>
                    </div>
                    : selectedPlayers.map((player, ind) => {
                        return (
                            <SelectedCard
                                key={ind}
                                player={player}
                                handleDeletePlayer={handleDeletePlayer}></SelectedCard>
                        )
                    })}
            </div>
        </div>
    );
};

export default SelectedPlayers;