import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";

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
                {selectedPlayers.map((player, ind) => {
                    return <div key={ind} className='flex justify-between items-center p-6 rounded-2xl border-2 border-gray-100'>
                        <div className='flex items-center gap-6'>
                            <img className='h-19 w-auto' src={player.playerImg} alt={player.playerName} />

                            <div>
                                <h2 className='font-semibold text-xl'>{player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>
                        </div>

                        <button className='btn text-[#F14749]' onClick={() => handleDeletePlayer(player)}>
                            <RiDeleteBinLine />
                        </button>
                    </div>
                })}
            </div>
        </div>
    );
};

export default SelectedPlayers;