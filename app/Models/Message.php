<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = ["body", "room_id"];

    public function player()
    {
        return $this->belongsTo(Player::class);
    }
}
