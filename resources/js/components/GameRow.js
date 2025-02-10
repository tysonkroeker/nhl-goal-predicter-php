// resources/js/components/GameRow.js

import React, { useState } from "react";
import PlayerList from './PlayerList';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import './GameRow.css';

export default function GameRow({game}) {
    const [homePlayersVisible, setHomePlayersVisible] = useState(false);
    const [awayPlayersVisible, setAwayPlayersVisible] = useState(false);

    function toggleAwayPlayers() {
        setAwayPlayersVisible(!awayPlayersVisible);
    }

    function toggleHomePlayers() {
        setHomePlayersVisible(!homePlayersVisible);
    }

  return (
    <div className='gameRow'>
        <span className='away trigger' onClick={toggleAwayPlayers}>
            {awayPlayersVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <img width="50" src={game.awayTeam.logo} />
        {game.awayTeam.placeName.default} {game.awayTeam.commonName.default}
        &nbsp;@
        <img src={game.homeTeam.logo} width="50" />
        {game.homeTeam.placeName.default} {game.homeTeam.commonName.default} 
        <span className='home trigger' onClick={toggleHomePlayers}>
            {homePlayersVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <div className='playerLists'>
            <div className='away playerList'>{awayPlayersVisible && <PlayerList team={game.awayTeam} searchedPlayer={data.searchedPlayer} />}</div>
            <div className='home playerList'>{homePlayersVisible && <PlayerList team={game.homeTeam} searchedPlayer={data.searchedPlayer} />}</div>
        </div>
    </div>
  );
}