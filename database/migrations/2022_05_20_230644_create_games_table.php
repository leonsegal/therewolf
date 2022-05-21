<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("games", function (Blueprint $table) {
            $table->id();
            $table->boolean("is_active")->default(true);
            $table->boolean("has_started")->default(false);
            $table->timestamps();
        });

        Schema::table("games", function (Blueprint $table) {
            $table->foreignId("player_id")->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("games");
    }
};
