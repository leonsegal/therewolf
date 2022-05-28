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
        Schema::create("messages", function (Blueprint $table) {
            $table->id();
            $table->text("body");
            $table->integer("room_id")->unsigned();
            $table->text("player_name")->nullable();
            $table->timestamps();
        });

        Schema::table("messages", function (Blueprint $table) {
            $table
                ->foreignId("game_id")
                ->nullable()
                ->constrained();
        });

        Schema::table("messages", function (Blueprint $table) {
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
        Schema::dropIfExists("messages");
    }
};
