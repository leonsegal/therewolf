<?php

use App\Http\Controllers\PlayerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MessageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group.
*/

Route::get(
    "/",
    fn() => Inertia::render("Welcome", [
        "canLogin" => Route::has("login"),
        "canRegister" => Route::has("register"),
        "laravelVersion" => Application::VERSION,
        "phpVersion" => PHP_VERSION,
    ])
);

Route::get("/dashboard", fn() => Inertia::render("Dashboard"))
    ->middleware(["auth", "verified"])
    ->name("dashboard");

Route::get("game", fn() => Inertia::render("Game"))
    ->middleware(["auth", "verified"])
    ->name("game");

Route::post("/messages", [MessageController::class, "index"])
    ->middleware(["auth", "verified"])
    ->name("messages.index");

Route::post("/message", [MessageController::class, "store"])
    ->middleware(["auth", "verified"])
    ->name("messages.store");

Route::get("/player", [PlayerController::class, "index"])
    ->middleware(["auth", "verified"])
    ->name("player.index");

require __DIR__ . "/auth.php";
