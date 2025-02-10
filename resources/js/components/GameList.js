// resources/js/components/GameList.js

import React, { useState } from "react";
import GameRow from './GameRow';

export default function GameList(props) {
    const [games, setGames] = useState(null);
    const [hasGames, setHasGames] = useState(false);

    let d = new Date();
    let formattedDate = d.toLocaleDateString("en-ca", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    
    if(games === null) {
        fetch("http://localhost:8000/api/schedule/"  + formattedDate, {mode: 'no-cors'})
        .then(data => {
            return data.json();
        })
        .then(data => {
            setGames(data);
            setHasGames(data.length > 0);
        });
    }

  return (
    <div>
        <div className="title m-b-md">NHL Player Stats</div>
        {games && games.map((game) => {
            return <GameRow key={game.id} game={game} />
        })}
        {!hasGames && <div>No Games</div>}
    </div>
  );
}