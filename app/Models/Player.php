<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Player extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ["name", "email", "password", "roomIds"];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = ["password", "remember_token"];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        "email_verified_at" => "datetime",
    ];

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    public function canJoinRoom($roomId): bool
    {
        // all can join room 0 (main)
        if ((int) $roomId === 0) {
            return true;
        }

        if ((int) $roomId === $this->role_id) {
            return true;
        }

        return false;
    }
}
