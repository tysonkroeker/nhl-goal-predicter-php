// resources/js/components/PlayerList.js

import React, { useState, useEffect } from "react";
import Player from './Player';

export default function PlayerList(data) {
    const [players, setPlayers] = useState(null);
    const [playerName, setPlayerName] = useState('');
    
    if(players === null) {
        fetch("http://localhost:8000/api/club-stats/" + data.team.abbrev, {mode: 'no-cors'})
        .then(data => {
            return data.json();
        })
        .then(data => {
            setPlayers(calculateStats(data.skaters));
        });
    }

    function getName(player) {
        return player.firstName.default + ' ' + player.lastName.default;
    }

    function nameUpdated(event) {
        setPlayerName(event.target.value);
    }

    function calculateStats(skaters) {
        skaters.map((skater) => {
            skater.goalsPerGame = (skater.goals / skater.gamesPlayed).toFixed(3);
            return skater;
        });
        return skaters.sort(comparePlayers);
    }

    function comparePlayers(playerOne, playerTwo) {
        return playerTwo.goalsPerGame - playerOne.goalsPerGame;
    }

  return (
    <div>
        <div>{data.team.placeName.default} {data.team.commonName.default}</div>
        <div>
            <input onChange={nameUpdated} />
        </div>
        {players && players.map((player) => {
            let name = getName(player);
            if(playerName != '' && name.indexOf(playerName) !== -1) {
                return <Player key={player.playerId} player={player} />
            } else if (playerName === '' || playerName === undefined) {
                return <Player key={player.playerId} player={player} />
            }
        })}
    </div>
  );
}