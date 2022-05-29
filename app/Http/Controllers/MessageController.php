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

        dd($game);

        $messages = [];
        if ($game->messages) {
            $messages = $game->messages->map(
                fn($message) => [
                    "id" => $message->id,
                    "body" => $message->body,
                    "player_name" => $message->user->name,
                    "player_id" => $message->user->id,
                    "created_at" => $message->created_at,
                ]
            );
        }

        return [
            "messages" => $messages,
            "user" => auth()->user(),
        ];
    }

    public function store()
    {
        $player = auth()->user();
        $game = Game::where("is_active", 1)->first();
        $message = $player->messages()->create([
            "body" => request("messageBody"),
            "room_id" => request("roomId"),
            "game_id" => $game->id,
            "player_name" => $player->name,
        ]);

        broadcast(new MessageSent($message));

        return ["status" => "Message sent", "message" => $message];
    }
}
