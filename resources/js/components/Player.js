// resources/js/components/Player.js

import React, { useState } from "react";

export default function Player(props) {
  return (
    <div>
        <img style={{height:'50px'}} src={props.player.headshot} />{props.player.firstName.default} {props.player.lastName.default} - {props.player.goalsPerGame}
    </div>
  );
}