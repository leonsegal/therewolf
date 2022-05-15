<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
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
        return [
            "messages" => Message::all()->map(
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
        ]);

        broadcast(new MessageSent($player, $message))->toOthers();

        return ["status" => "Message sent"];
    }
}
