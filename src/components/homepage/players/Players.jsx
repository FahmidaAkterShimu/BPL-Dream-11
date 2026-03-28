import React, { use, useState } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectedPlayers from './selectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {

    const players = use(playersPromise);

    const [active, setActive] = useState("available");

    return (
        <div className='max-w-330 mx-auto mt-20'>

            <div className='flex justify-between items-center mb-8'>
                {active === "available" ? <h2 className='text-3xl font-bold'>Available players</h2> : <h2 className='text-3xl font-bold'>Selected Player (4/6)</h2>}

                <div>
                    <button
                        onClick={() => setActive("available")}
                        className={`btn ${active === "available" ? "font-bold bg-[#E7FE29]" : "opacity-60 bg-white"} rounded-l-xl rounded-r-none`}>Available</button>

                    <button
                        onClick={() => setActive("selected")}
                        className={`btn ${active === "selected" ? "font-bold bg-[#E7FE29]" : "opacity-60 bg-white"} rounded-r-xl rounded-l-none`}>Selected <span>(0)</span></button>
                </div>
            </div>

            {active === "available"
                ? <AvailablePlayers players={players}></AvailablePlayers>
                : <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;