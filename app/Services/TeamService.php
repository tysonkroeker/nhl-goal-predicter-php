<?php

namespace App\Services;

class TeamService
{
    public function getTeamsPlaying($games, $date) {
        $teams = [];
        $teamData = [];
        foreach($games as $game) {
            array_push($teams, $game->awayTeam->abbrev);
            array_push($teams, $game->homeTeam->abbrev);
        }

        foreach($teams as $teamAbbrev) {

        }

        $standings = json_decode(file_get_contents('https://api-web.nhle.com/v1/standings/' . $date));
        foreach($standings->standings as $team) {
            if(in_array($team->teamAbbrev->default, $teams)) {
                $teamData[$team->teamAbbrev->default] = $team;
            }
        }
        return $teamData;
    }

    public function getTeams() {
        $teams = json_decode(file_get_contents("https://api-web.nhle.com/v1/standings/2025-01-29"));
        logger()->info("teams:", [
            'teams' => $teams,
        ]);
        return $teams;
    }
}
