<?php

namespace App\Http\Controllers;

use App\Services\GameService;
use App\Services\PlayerService;
use App\Services\StatService;
use App\Services\TeamService;

class HomeController extends Controller
{
    public function home() {
        // $date = date('Y-m-d');
        // $games = app()->make(GameService::class)->getGames($date);
        // $teams = app()->make(TeamService::class)->getTeamsPlaying($games, $date);
        // $players = app()->make(PlayerService::class)->getPlayersPlaying($games, $date);
        // $stats = app()->make(StatService::class)->getStats();

        return view('app', [
            // 'games' => $games,
            // 'teams' => $teams,
            // 'players' => $players,
            // 'stats' => $stats,
            // 'date' => $date,
            'games' => [],
            'teams' => [],
            'players' => [],
            'stats' => [],
            'date' => [],
        ]);
    }
}
