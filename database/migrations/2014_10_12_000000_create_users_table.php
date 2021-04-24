<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration {
    public function up() {
        Schema::create('user', function (Blueprint $table) {
            $table->mediumIncrements("id");
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp("created_at")->useCurrentOnUpdate()->useCurrent();
            $table->timestamp("updated_at")->useCurrentOnUpdate()->useCurrent();
        });
    }

    public function down() {
        Schema::dropIfExists('user');
    }
}
