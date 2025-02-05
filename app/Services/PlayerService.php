<?php

namespace App\Services;

class PlayerService
{
    public function getPlayers($teamAbbrev) {
        $players = json_decode(file_get_contents("https://api-web.nhle.com/v1/club-stats/" . $teamAbbrev . "/20242025/2"));
        return $players;
    }

    public function getPlayersPlaying($games, $date) {
        $players = [];
        foreach($games as $game) {
            $players[$game->awayTeam->abbrev] = json_decode(file_get_contents("https://api-web.nhle.com/v1/club-stats/" . $game->awayTeam->abbrev . "/20242025/2"))->skaters;
            $players[$game->homeTeam->abbrev] = json_decode(file_get_contents("https://api-web.nhle.com/v1/club-stats/" . $game->homeTeam->abbrev . "/20242025/2"))->skaters;
        }
        return $players;
    }
}
