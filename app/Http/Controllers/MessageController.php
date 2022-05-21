<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Game;

class MessageController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index()
    {
        $game = Game::firstOrCreate([
            "is_active" => true,
            "has_started" => false,
        ]);
        return [
            "messages" => $game->messages->map(
                fn($message) => [
                    "id" => $message->id,
                    "body" => $message->body,
                    "player_name" => $message->user->name,
                    "player_id" => $message->user->id,
                    "created_at" => $message->created_at,
                ]
            ),
            "user" => auth()->user(),
        ];
    }

    public function store()
    {
        $player = auth()->user();
        $message = $player->messages()->create([
            "body" => request("body"),
            "room_id" => request("roomId"),
        ]);

        broadcast(new MessageSent($message));

        return ["status" => "Message sent"];
    }
}
