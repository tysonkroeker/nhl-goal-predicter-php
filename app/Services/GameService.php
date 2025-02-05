<?php

namespace App\Services;

class GameService
{
    public function getGames($date) {
        $games = json_decode(file_get_contents("https://api-web.nhle.com/v1/schedule/" . $date));
        $games = $games->gameWeek[0]->games;
        logger()->info("games:", ['games' => $games]);
        return $games;
    }
}
