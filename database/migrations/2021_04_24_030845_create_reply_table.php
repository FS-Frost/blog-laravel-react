<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReplyTable extends Migration {
    public function up() {
        Schema::create('reply', function (Blueprint $table) {
            $table->mediumIncrements("id");
            $table->mediumInteger("comment_id")->unsigned();
            $table->mediumInteger("commenteed_id")->unsigned();
            $table->timestamp("created_at")->useCurrentOnUpdate()->useCurrent();
            $table->timestamp("updated_at")->useCurrentOnUpdate()->useCurrent();
            $table->foreign("comment_id")->references("id")->on("comment")->onDelete("cascade");
            $table->foreign("commenteed_id")->references("id")->on("comment")->onDelete("cascade");
            $table->unique(["comment_id", "commenteed_id"], "UNIQUE");
        });
    }

    public function down() {
        Schema::dropIfExists('reply');
    }
}
