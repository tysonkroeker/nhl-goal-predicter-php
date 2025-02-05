<?php

namespace App\Services;

class StatService
{
    public function getStats() {
        $stats = json_decode(file_get_contents("https://api-web.nhle.com/v1/standings/2025-01-29"));
        logger()->info("stats:", ['stats' => $stats]);
        return $stats;
    }
}
