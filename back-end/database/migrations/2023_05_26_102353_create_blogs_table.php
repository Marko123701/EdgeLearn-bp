<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('author');
            $table->string('title');
            $table->text('content');
            $table->integer('likes')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('blogs');
    }
};
