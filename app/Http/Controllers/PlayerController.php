<?php

namespace App\Http\Controllers;

class PlayerController extends Controller
{
    public function index()
    {
        return [
            "player" => auth()->user(),
        ];
    }
}
