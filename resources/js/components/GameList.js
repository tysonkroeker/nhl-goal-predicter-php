// resources/js/components/GameList.js

import React, { useState } from "react";
import ReactDOM from 'react-dom';
import GameRow from './GameRow';

export default function GameList() {

    const [searchedPlayer, setSearchedPlayer] = useState(PaymentResponse.searchedPlayer);
    const [games, setGames] = useState(null);

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
        });
    }

    function updateSearchedPlayer(d) {
        if(d.length >= 3) {
            setSearchedPlayer(d.target.value);
        }
    }

  return (
    <div>
        <div className="title m-b-md">NHL Player Stats</div>
        <div><input onChange={updateSearchedPlayer} /></div>
        {games && games.map((game) => {
            return <GameRow key={game.id} game={game} searchedPlayer={searchedPlayer} />
        })}
    </div>
  );
}