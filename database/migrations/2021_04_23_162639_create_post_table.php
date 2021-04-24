<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTable extends Migration {
    public function up() {
        Schema::create('post', function (Blueprint $table) {
            $table->mediumIncrements("id");
            $table->mediumInteger("user_id")->unsigned();
            $table->string("title");
            $table->string("content", 4096);
            $table->timestamp("published_at")->nullable();
            $table->timestamp("created_at")->useCurrentOnUpdate()->useCurrent();
            $table->timestamp("updated_at")->useCurrentOnUpdate()->useCurrent();
            $table->foreign("user_id")->references("id")->on("user")->onDelete("cascade");
        });
    }

    public function down() {
        Schema::dropIfExists('post');
    }
}
