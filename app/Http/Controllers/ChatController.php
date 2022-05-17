<?php

namespace App\Http\Controllers;

class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index()
    {
        return [
            ["text" => "foo here", "id" => 1, "player" => "mr foo"],
            ["text" => "bar here", "id" => 2, "player" => "mr bar"],
            ["text" => "baz here", "id" => 3, "player" => "mr baz"],
            ["text" => "foobar here", "id" => 4, "player" => "mr foobar"],
            ["text" => "foobaz here", "id" => 5, "player" => "mr foobaz"],
        ];
    }

    public function store()
    {
        $player = auth()->user();
        $player->messages()->create([
            "message" => request("message"),
        ]);

        return ["status" => "Message sent"];
    }
}
