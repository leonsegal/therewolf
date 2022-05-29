<?php

namespace Database\Seeders;

use App\Models\Player;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("players")->insert([
            "name" => "leon",
            "email" => "leon@test.com",
            "password" =>
                '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            "is_admin" => true,
        ]);

        DB::table("players")->insert([
            "name" => "kate",
            "email" => "kate@test.com",
            "password" =>
                '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            "is_admin" => true,
        ]);

        Player::factory()
            ->count(5)
            ->create();
    }
}
