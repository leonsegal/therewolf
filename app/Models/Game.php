<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = ["is_active", "has_started"];

    public function players()
    {
        return $this->belongsToMany(Player::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
