<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

//Broadcast::channel("App.Models.Player.{id}", function ($user, $id) {
//    return (int) $user->id === (int) $id;
//});
//Broadcast::channel('orders.{orderId}', function ($user, $orderId) {
//    return $user->id === Order::findOrNew($orderId)->user_id;
//});
Broadcast::channel("chat.{roomId}", function ($user, $roomId) {
    if (!$user->canJoinRoom($roomId)) {
        return false;
    }

    return ["id" => $user->id, "name" => $user->name];
});
