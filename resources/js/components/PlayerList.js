// resources/js/components/PlayerList.js

import React, { useState } from "react";
import Player from './Player';

export default function PlayerList(data) {
    console.log(data);

    const [players, setPlayers] = useState(null);
    
    if(players === null) {
        fetch("http://localhost:8000/api/club-stats/" + data.teamId, {mode: 'no-cors'})
        .then(data => {
            return data.json();
        })
        .then(data => {
            setPlayers(data.skaters);
        });
    }

  return (
    <div>
        <div>Player List</div>
        {players && players.map((player) => {
            return <Player key={player.playerId} player={player} />
        })}
    </div>
  );
}