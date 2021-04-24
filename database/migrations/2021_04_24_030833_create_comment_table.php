<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentTable extends Migration {
    public function up() {
        Schema::create('comment', function (Blueprint $table) {
            $table->mediumIncrements("id");
            $table->mediumInteger("user_id")->unsigned();
            $table->mediumInteger("post_id")->unsigned();
            $table->string("content", 255);
            $table->timestamp("created_at")->useCurrentOnUpdate()->useCurrent();
            $table->timestamp("updated_at")->useCurrentOnUpdate()->useCurrent();
            $table->foreign("user_id")->references("id")->on("user")->onDelete("cascade");
            $table->foreign("post_id")->references("id")->on("post")->onDelete("cascade");
        });
    }

    public function down() {
        Schema::dropIfExists('comment');
    }
}
