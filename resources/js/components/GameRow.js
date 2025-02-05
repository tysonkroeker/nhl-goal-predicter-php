// resources/js/components/GameRow.js

import React, { useState } from "react";
import PlayerList from './PlayerList';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

export default function GameRow(data) {
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
        <img width="50" src={data.game.awayTeam.logo} />
        {data.game.awayTeam.commonName.default}
        @
        <img src={data.game.homeTeam.logo} width="50" />
        {data.game.homeTeam.commonName.default} 
        <span className='home trigger' onClick={toggleHomePlayers}>
            {homePlayersVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <div className='away playerList'>{awayPlayersVisible && <PlayerList teamId={data.game.awayTeam.abbrev} />}</div>
        <div className='home playerList'>{homePlayersVisible && <PlayerList teamId={data.game.homeTeam.abbrev} />}</div>
    </div>
  );
}