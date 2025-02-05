<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Services\GameService;
use App\Services\PlayerService;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'HomeController@home');
Route::get('/test', 'HomeController@home');

Route::prefix('/api')->group(function() {
    Route::get('/schedule/{date}', function(Request $request) {
        $date = $request->route('date');
        $games = app()->make(GameService::class)->getGames($date);
        return response()->json($games);
    });

    Route::get('/club-stats/{teamAbbrev}', function(Request $request) {
        $teamAbbrev = $request->route('teamAbbrev');
        $players = app()->make(PlayerService::class)->getPlayers($teamAbbrev);
        return response()->json($players);
    });
});
