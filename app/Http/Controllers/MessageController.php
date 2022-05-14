<?php

namespace App\Http\Controllers;

use App\Models\Message;

class MessageController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index()
    {
        // todo: get messages for current game only
        return Message::all()->map(
            fn($message) => [
                "id" => $message->id,
                "body" => $message->body,
                "player_name" => $message->user->name,
                "created_at" => $message->created_at,
            ]
        );
    }

    public function store()
    {
        $player = auth()->user();
        $player->messages()->create([
            "body" => request("body"),
        ]);

        return ["status" => "Message sent"];
    }
}
