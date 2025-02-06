// resources/js/components/Player.js

import React, { useState } from "react";

export default function Player(props) {
    console.log(props.player);
    let goalPercentage = (props.player.goals / props.player.gamesPlayed).toFixed(3);
  return (
    <div>
        <img style={{height:'50px'}} src={props.player.headshot} />{props.player.firstName.default} {props.player.lastName.default} - {goalPercentage}
    </div>
  );
}