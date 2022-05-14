<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index()
    {
        return Message::with("user")->get();
    }

    public function store()
    {
        $user = auth()->user();
        $user->messages()->create([
            "message" => request("message"),
        ]);

        return ["status" => "Message sent"];
    }
}
